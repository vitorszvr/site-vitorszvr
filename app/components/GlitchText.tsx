import React from "react";

interface GlitchTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
}

export default function GlitchText({
  text,
  as: Tag = "span",
  className = "",
}: GlitchTextProps) {
  return (
    <Tag
      className={`relative inline-block group ${className}`}
      data-text={text}
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-blood opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 translate-x-[2px]">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-hazard opacity-0 group-hover:opacity-70 group-hover:animate-glitch-2 -translate-x-[2px]">
        {text}
      </span>
    </Tag>
  );
}
