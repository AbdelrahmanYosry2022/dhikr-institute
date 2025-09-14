import json
import os
import sys
import urllib.request
import urllib.error
from typing import Dict, Any, List, Optional


NOTION_API = "https://api.notion.com/v1"
NOTION_VERSION = os.environ.get("NOTION_VERSION", "2022-06-28")


def _headers(token: str) -> Dict[str, str]:
    return {
        "Authorization": f"Bearer {token}",
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
    }


def _request(method: str, path: str, token: str, body: Optional[Dict[str, Any]] = None) -> Any:
    url = path if path.startswith("http") else f"{NOTION_API}{path}"
    data = None
    if body is not None:
        data = json.dumps(body).encode("utf-8")
    req = urllib.request.Request(url=url, data=data, method=method, headers=_headers(token))
    try:
        with urllib.request.urlopen(req) as resp:
            raw = resp.read()
            if not raw:
                return None
            return json.loads(raw.decode("utf-8"))
    except urllib.error.HTTPError as e:
        err_body = e.read().decode("utf-8") if e.fp else ""
        raise RuntimeError(f"HTTP {e.code} {e.reason}: {err_body}")


def get_self(token: str) -> Dict[str, Any]:
    return _request("GET", "/users/me", token)


def search_recent(token: str, page_size: int = 20) -> List[Dict[str, Any]]:
    body = {
        "page_size": page_size,
        "sort": {"direction": "descending", "timestamp": "last_edited_time"},
    }
    res = _request("POST", "/search", token, body)
    return res.get("results", []) if isinstance(res, dict) else []


def _extract_title_from_page(page: Dict[str, Any]) -> str:
    props = page.get("properties", {})
    # Find first title property
    for name, prop in props.items():
        if prop and prop.get("type") == "title":
            rich = prop.get("title") or []
            if rich:
                return rich[0].get("plain_text") or rich[0].get("text", {}).get("content", "")
    # Fallback to URL or ID
    return page.get("url") or page.get("id", "<untitled page>")


def _extract_title_from_database(db: Dict[str, Any]) -> str:
    rich = db.get("title") or []
    if rich:
        return rich[0].get("plain_text") or rich[0].get("text", {}).get("content", "")
    return db.get("id", "<untitled database>")


def list_files_in_page(token: str, page_id: str) -> List[Dict[str, str]]:
    files: List[Dict[str, str]] = []

    # 1) Inspect page properties for files-type
    page = _request("GET", f"/pages/{page_id}", token)
    props = page.get("properties", {}) if isinstance(page, dict) else {}
    for name, prop in props.items():
        if isinstance(prop, dict) and prop.get("type") == "files":
            for f in prop.get("files", []) or []:
                ftype = f.get("type")
                if ftype == "file":
                    url = f.get("file", {}).get("url")
                else:
                    url = f.get("external", {}).get("url")
                if url:
                    files.append({"source": "property", "name": name, "url": url})

    # 2) Traverse blocks (one level) for file-like blocks
    def collect_from_children(block_id: str):
        res = _request("GET", f"/blocks/{block_id}/children?page_size=100", token)
        for b in res.get("results", []) if isinstance(res, dict) else []:
            btype = b.get("type")
            data = b.get(btype, {}) if btype else {}
            url: Optional[str] = None
            if btype in ("image", "file", "pdf", "video", "audio"):
                if data.get("type") == "file":
                    url = data.get("file", {}).get("url")
                elif data.get("type") == "external":
                    url = data.get("external", {}).get("url")
            if url:
                files.append({"source": "block", "name": btype, "url": url})

    collect_from_children(page_id)
    return files


def fetch_blocks(token: str, block_id: str) -> List[Dict[str, Any]]:
    results: List[Dict[str, Any]] = []
    next_cursor: Optional[str] = None
    while True:
        path = f"/blocks/{block_id}/children?page_size=100"
        if next_cursor:
            path += f"&start_cursor={next_cursor}"
        res = _request("GET", path, token)
        items = res.get("results", []) if isinstance(res, dict) else []
        results.extend(items)
        if not res.get("has_more"):
            break
        next_cursor = res.get("next_cursor")
        if not next_cursor:
            break
    return results


def _md_escape(text: str) -> str:
    return text.replace("*", "\\*").replace("_", "\\_")


def _rich_text_to_md(rich: List[Dict[str, Any]]) -> str:
    parts: List[str] = []
    for r in rich or []:
        if r.get("type") == "equation":
            expr = r.get("equation", {}).get("expression", "")
            parts.append(f"${expr}$")
            continue
        t = r.get("plain_text") or r.get("text", {}).get("content", "")
        href = r.get("href")
        ann = r.get("annotations", {})
        content = _md_escape(t)
        if ann.get("code"):
            content = f"`{content}`"
        if ann.get("bold"):
            content = f"**{content}**"
        if ann.get("italic"):
            content = f"*{content}*"
        if href:
            content = f"[{content}]({href})"
        parts.append(content)
    return "".join(parts)


def _render_block_md(block: Dict[str, Any], token: str, depth: int = 0) -> str:
    t = block.get("type")
    data = block.get(t, {}) if t else {}
    indent = "  " * depth
    if t in ("heading_1", "heading_2", "heading_3"):
        level = {"heading_1": "#", "heading_2": "##", "heading_3": "###"}[t]
        return f"{level} {_rich_text_to_md(data.get('rich_text') or [])}\n\n"
    if t == "paragraph":
        text = _rich_text_to_md(data.get("rich_text") or [])
        return f"{text}\n\n" if text else "\n"
    if t == "bulleted_list_item":
        text = _rich_text_to_md(data.get("rich_text") or [])
        md = f"{indent}- {text}\n"
        children = fetch_blocks(token, block.get("id")) if block.get("has_children") else []
        for ch in children:
            md += _render_block_md(ch, token, depth + 1)
        return md
    if t == "numbered_list_item":
        text = _rich_text_to_md(data.get("rich_text") or [])
        md = f"{indent}1. {text}\n"
        children = fetch_blocks(token, block.get("id")) if block.get("has_children") else []
        for ch in children:
            md += _render_block_md(ch, token, depth + 1)
        return md
    if t == "to_do":
        checked = data.get("checked")
        text = _rich_text_to_md(data.get("rich_text") or [])
        return f"{indent}- [{'x' if checked else ' '}] {text}\n"
    if t == "quote":
        text = _rich_text_to_md(data.get("rich_text") or [])
        return f"> {text}\n\n"
    if t == "code":
        lang = data.get("language") or ""
        text = "".join(rt.get("plain_text") or rt.get("text", {}).get("content", "") for rt in data.get("rich_text") or [])
        return f"```{lang}\n{text}\n```\n\n"
    if t == "divider":
        return "\n---\n\n"
    if t in ("image", "file", "pdf", "video", "audio", "bookmark", "embed"):
        url = None
        if data.get("type") == "external":
            url = data.get("external", {}).get("url")
        else:
            url = data.get("file", {}).get("url") or data.get("url")
        label = t.capitalize()
        return f"[{label}]({url})\n\n" if url else "\n"
    if t == "callout":
        text = _rich_text_to_md(data.get("rich_text") or [])
        return f"> ℹ️ {text}\n\n"
    if t == "toggle":
        text = _rich_text_to_md(data.get("rich_text") or [])
        md = f"<details><summary>{text}</summary>\n\n"
        children = fetch_blocks(token, block.get("id")) if block.get("has_children") else []
        for ch in children:
            md += _render_block_md(ch, token, depth + 1)
        md += "\n</details>\n\n"
        return md
    if t == "child_page":
        title = block.get("child_page", {}).get("title", "Page")
        url = block.get("url") or ""
        return f"- [{title}]({url})\n"
    # Fallback
    return "\n"


def export_page_markdown(token: str, page_id: str) -> str:
    blocks = fetch_blocks(token, page_id)
    md_parts: List[str] = []
    for b in blocks:
        md_parts.append(_render_block_md(b, token))
    return "".join(md_parts)


def main(argv: List[str]) -> int:
    if len(argv) == 0 or argv[0] in {"-h", "--help"}:
        print(
            "Usage:\n"
            "  python tools/notion_browser.py self            # Verify token and print workspace user\n"
            "  python tools/notion_browser.py recent [N]      # List recent pages/databases (default 20)\n"
            "  python tools/notion_browser.py files <PAGE_ID> # List file URLs in a page\n"
            "  python tools/notion_browser.py export-md <PAGE_ID> <OUTFILE>  # Export page to Markdown file\n"
        )
        return 0

    token = os.environ.get("NOTION_TOKEN")
    if not token:
        print("ERROR: Please set NOTION_TOKEN environment variable.", file=sys.stderr)
        return 2

    cmd = argv[0]
    try:
        if cmd == "self":
            me = get_self(token)
            print(json.dumps(me, indent=2))
            return 0
        elif cmd == "recent":
            n = int(argv[1]) if len(argv) > 1 else 20
            results = search_recent(token, n)
            out = []
            for item in results:
                obj = item.get("object")
                url = item.get("url")
                if obj == "page":
                    title = _extract_title_from_page(item)
                elif obj == "database":
                    title = _extract_title_from_database(item)
                else:
                    title = item.get("id", "<unknown>")
                out.append({
                    "object": obj,
                    "id": item.get("id"),
                    "title": title,
                    "url": url,
                })
            print(json.dumps(out, indent=2, ensure_ascii=False))
            return 0
        elif cmd == "files":
            if len(argv) < 2:
                print("ERROR: missing <PAGE_ID>", file=sys.stderr)
                return 2
            page_id = argv[1]
            files = list_files_in_page(token, page_id)
            print(json.dumps(files, indent=2, ensure_ascii=False))
            return 0
        elif cmd == "export-md":
            if len(argv) < 3:
                print("ERROR: usage export-md <PAGE_ID> <OUTFILE>", file=sys.stderr)
                return 2
            page_id, outfile = argv[1], argv[2]
            md = export_page_markdown(token, page_id)
            os.makedirs(os.path.dirname(outfile) or ".", exist_ok=True)
            with open(outfile, "w", encoding="utf-8") as f:
                f.write(md)
            print(f"Wrote Markdown to {outfile}")
            return 0
        else:
            print(f"Unknown command: {cmd}", file=sys.stderr)
            return 2
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
