"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a,
        button {
          cursor: none;
        }
      `}</style>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Outer Crosshair that rotates on hover */}
        <div
          className={`relative flex items-center justify-center transition-all duration-300 ease-out ${
            isHovering ? "scale-150 rotate-45" : "scale-100 rotate-0"
          }`}
        >
          <div className="absolute w-[40px] h-[1px] bg-white" />
          <div className="absolute w-[1px] h-[40px] bg-white" />

          {/* Inner Circle */}
          <div
            className={`w-2 h-2 bg-hazard transition-all duration-300 ${
              isHovering ? "bg-blood" : "bg-hazard"
            }`}
          />
        </div>

        {/* Coordinates Label */}
        <div className="absolute top-4 left-4 whitespace-nowrap">
          <span className="text-[10px] font-tech text-white tracking-widest opacity-70">
            X:{position.x.toString().padStart(4, "0")} <br />
            Y:{position.y.toString().padStart(4, "0")}
          </span>
        </div>
      </div>
    </>
  );
}
