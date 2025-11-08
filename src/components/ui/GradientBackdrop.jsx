import React from "react";

export default function GradientBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Main gradient layer with animation */}
      <div
        className="absolute inset-0 opacity-95 bg-[length:200%_200%]"
        style={{
          backgroundImage: `
            radial-gradient(60% 60% at 85% 35%, rgba(217,148,66,0.55), transparent 60%),
            radial-gradient(70% 70% at 15% 20%, rgba(53,106,230,0.55), transparent 60%),
            linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.35))
          `,
          filter: 'blur(32px) saturate(110%)',
          animation: 'gradientShift 22s ease-in-out infinite',
        }}
      />
      
      {/* Animated blob 1 - blue */}
      <div 
        className="absolute left-[-10%] top-[20%] h-[40vmax] w-[40vmax] rounded-full blur-3xl"
        style={{
          background: 'rgba(53,106,230,0.3)',
          animation: 'blob 18s ease-in-out infinite',
        }}
      />
      
      {/* Animated blob 2 - amber */}
      <div 
        className="absolute right-[-10%] top-[40%] h-[50vmax] w-[50vmax] rounded-full blur-3xl"
        style={{
          background: 'rgba(217,148,66,0.25)',
          animation: 'blob 18s ease-in-out infinite 6s',
        }}
      />
      
      {/* Additional lilac accent blob */}
      <div 
        className="absolute left-[40%] bottom-[10%] h-[35vmax] w-[35vmax] rounded-full blur-3xl opacity-40"
        style={{
          background: 'rgba(154,164,255,0.2)',
          animation: 'blob 18s ease-in-out infinite 12s',
        }}
      />
    </div>
  );
}