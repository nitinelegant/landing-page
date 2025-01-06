// components/GlassMorphic.tsx
import React from "react";

interface GlassMorphicProps {
  children: React.ReactNode;
  className?: string;
}

const GlassMorphic = ({ children, className = "" }: GlassMorphicProps) => {
  return (
    <div
      className={`
      backdrop-blur-md
      bg-white/30
      rounded-xl
      border
      border-white/20
      shadow-lg
      p-6
      backdrop-saturate-150
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default GlassMorphic;
