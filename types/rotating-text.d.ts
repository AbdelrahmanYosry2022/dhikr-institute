declare module "@/components/RotatingText.jsx" {
  import * as React from "react";

  export interface RotatingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    texts: string[];
    transition?: any;
    initial?: any;
    animate?: any;
    exit?: any;
    animatePresenceMode?: "wait" | "sync" | "popLayout";
    animatePresenceInitial?: boolean;
    rotationInterval?: number;
    staggerDuration?: number;
    staggerFrom?: "first" | "last" | "center" | "random" | number;
    loop?: boolean;
    auto?: boolean;
    splitBy?: "characters" | "words" | "lines" | string;
    onNext?: (index: number) => void;
    mainClassName?: string;
    splitLevelClassName?: string;
    elementLevelClassName?: string;
  }

  const RotatingText: React.ForwardRefExoticComponent<
    RotatingTextProps & React.RefAttributes<any>
  >;
  export default RotatingText;
}
