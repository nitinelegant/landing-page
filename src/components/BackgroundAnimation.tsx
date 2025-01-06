import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundAnimation = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const heroSection = document.querySelector(".hero-section");
    function handleResize() {
      setDimensions({
        width: heroSection?.offsetWidth || 0,
        height: heroSection?.offsetHeight || 0,
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colors = [
    "#6f3995",
    "#d87029",
    "#b92073",
    "#d41e2a",
    "#3089ca",
    "#1b8052",
  ];

  const shapes = Array.from({ length: 10 }).map(() => ({
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height,
    size: Math.random() * 80 + 20, // Random size between 50 and 150
    type: ["rect", "circle"][Math.floor(Math.random() * 2)], // Random shape
    color: colors[Math.floor(Math.random() * colors.length)], // Random color
  }));

  return (
    <div
      className="absolute inset-0 z-0"
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <svg width="100%" height="100%">
        {shapes.map((shape, i) => {
          if (shape.type === "rect") {
            return (
              <motion.rect
                key={i}
                x={shape.x}
                y={shape.y}
                width={shape.size}
                height={shape.size}
                fill={shape.color}
                initial={{ opacity: 0, rotate: 0 }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  rotate: [0, 360],
                  x: shape.x + Math.random() * 50 - 25,
                  y: shape.y + Math.random() * 50 - 25,
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            );
          } else {
            return (
              <motion.circle
                key={i}
                cx={shape.x}
                cy={shape.y}
                r={shape.size / 2}
                fill={shape.color}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            );
          }
        })}
      </svg>
    </div>
  );
};

export default BackgroundAnimation;
