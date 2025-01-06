import Matter from "matter-js";

export const createCircle = (
  x: number,
  y: number,
  radius: number,
  options?: Matter.IBodyDefinition
) => {
  return Matter.Bodies.circle(x, y, radius, {
    restitution: 0.8,
    render: {
      fillStyle: "#4CAF50",
    },
    ...options,
  });
};

export const createRectangle = (
  x: number,
  y: number,
  width: number,
  height: number,
  options?: Matter.IBodyDefinition
) => {
  return Matter.Bodies.rectangle(x, y, width, height, {
    restitution: 0.8,
    render: {
      fillStyle: "#2196F3",
    },
    ...options,
  });
};

export const createTextBody = (x: number, y: number, text: string) => {
  const textSize = 60;
  const textWidth = text.length * textSize * 0.6;
  const textHeight = textSize * 1.2;

  return Matter.Bodies.rectangle(x, y, textWidth, textHeight, {
    render: {
      fillStyle: "transparent",
      sprite: {
        texture: createTextTexture(text, textSize),
        xScale: 1,
        yScale: 1,
      },
    },
    isStatic: true,
  });
};

const createTextTexture = (text: string, size: number) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  canvas.width = text.length * size * 0.6;
  canvas.height = size * 1.2;

  ctx.font = `bold ${size}px Arial, sans-serif`;
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL();
};
