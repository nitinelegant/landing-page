import { useEffect, useRef } from "react";
import Matter from "matter-js";

export const usePhysics = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const engineRef = useRef(Matter.Engine.create());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = engineRef.current;
    const render = Matter.Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: canvas.width,
        height: canvas.height,
        wireframes: false,
        background: "transparent",
      },
    });

    Matter.Render.run(render);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      Matter.Render.setPixelRatio(render, window.devicePixelRatio);
      Matter.Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: window.innerWidth, y: window.innerHeight },
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
    };
  }, [canvasRef]);

  return engineRef;
};
