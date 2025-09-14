# Notion Access Helper

This repo includes a tiny Python script to validate a Notion integration token and list recent content or files attached to a specific page.

## Setup

1. Create a Notion internal integration and copy its secret token.
2. Share any pages/databases you want to query with your integration via the Share menu in Notion.
3. Export your token in your shell:

```bash
export NOTION_TOKEN="paste-your-token-here"
# Optional: pin the API version
export NOTION_VERSION="2022-06-28"
```

For zsh on macOS you can persist these in `~/.zshrc`:

```bash
echo 'export NOTION_TOKEN="paste-your-token-here"' >> ~/.zshrc
echo 'export NOTION_VERSION="2022-06-28"' >> ~/.zshrc
source ~/.zshrc
```

## Usage

```bash
# Verify the token/user
python tools/notion_browser.py self

# List most recently edited pages/databases (default 20)
python tools/notion_browser.py recent 20

# List file URLs found in a page (properties and top-level blocks)
python tools/notion_browser.py files <PAGE_ID>
```

Outputs are JSON for easy piping.
