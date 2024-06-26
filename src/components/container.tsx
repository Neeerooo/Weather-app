import { cn } from "@/utils/cn";
import React, { ReactHTMLElement } from "react";

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "w-full bg-white dark:bg-slate-800 border rounded-xl flex py-4 shadow-sm",
        props.className
      )}
    />
  );
}
