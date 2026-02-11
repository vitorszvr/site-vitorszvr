import React from "react";

interface ViewfinderFrameProps {
  children: React.ReactNode;
  label?: string;
  coords?: string;
  className?: string;
}

export default function ViewfinderFrame({
  children,
  label = "SYSTEM.VIEW",
  coords = "X:00 Y:00",
  className = "",
}: ViewfinderFrameProps) {
  return (
    <div
      className={`relative group border border-noir-light bg-noir/50 p-6 ${className}`}
    >
      {/* Corner Markers */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-hazard z-10" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-hazard z-10" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-hazard z-10" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-hazard z-10" />

      {/* Crosshairs */}
      <div className="absolute top-1/2 left-0 w-2 h-[1px] bg-hazard/50 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-2 h-[1px] bg-hazard/50 -translate-y-1/2" />
      <div className="absolute top-0 left-1/2 w-[1px] h-2 bg-hazard/50 -translate-x-1/2" />
      <div className="absolute bottom-0 left-1/2 w-[1px] h-2 bg-hazard/50 -translate-x-1/2" />

      {/* Labels */}
      <div className="absolute -top-3 left-4 bg-noir px-2">
        <span className="font-tech text-xs text-hazard tracking-widest">
          {label}
        </span>
      </div>
      <div className="absolute -bottom-3 right-4 bg-noir px-2">
        <span className="font-tech text-xs text-gray-500 tracking-widest">
          {coords}
        </span>
      </div>

      {children}
    </div>
  );
}
