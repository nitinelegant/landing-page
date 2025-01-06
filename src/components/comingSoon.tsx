"use client";

import { useEffect, useRef, useState } from "react";
import {
  Engine,
  Render,
  World,
  Bodies,
  Mouse,
  MouseConstraint,
} from "matter-js";

export default function ComingSoon() {
  const scene = useRef<HTMLDivElement>(null);
  const engine = useRef(Engine.create());
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!scene.current) return;

    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transparent",
      },
    });

    // Add walls
    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    // Add shapes
    const shapes = [];
    for (let i = 0; i < 50; i++) {
      const shape =
        i % 2 === 0
          ? Bodies.circle(
              Math.random() * cw,
              Math.random() * ch,
              10 + Math.random() * 30,
              {
                render: { fillStyle: "#3B82F6" },
              }
            )
          : Bodies.polygon(
              Math.random() * cw,
              Math.random() * ch,
              3 + Math.floor(Math.random() * 5),
              10 + Math.random() * 30,
              {
                render: { fillStyle: "#10B981" },
              }
            );
      shapes.push(shape);
    }
    World.add(engine.current.world, shapes);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    World.add(engine.current.world, mouseConstraint);

    // Run the engine
    Engine.run(engine.current);
    Render.run(render);

    // Countdown timer
    const launchDate = new Date("2025-01-01T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(timer);
      Render.stop(render);
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div ref={scene} className="absolute inset-0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white">
          Our exciting new site is under construction!
        </p>
        <div className="grid grid-cols-4 gap-4 text-white">
          <div>
            <span className="text-3xl md:text-5xl font-bold">
              {countdown.days}
            </span>
            <p className="text-sm md:text-base">Days</p>
          </div>
          <div>
            <span className="text-3xl md:text-5xl font-bold">
              {countdown.hours}
            </span>
            <p className="text-sm md:text-base">Hours</p>
          </div>
          <div>
            <span className="text-3xl md:text-5xl font-bold">
              {countdown.minutes}
            </span>
            <p className="text-sm md:text-base">Minutes</p>
          </div>
          <div>
            <span className="text-3xl md:text-5xl font-bold">
              {countdown.seconds}
            </span>
            <p className="text-sm md:text-base">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
