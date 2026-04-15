"use client";

import { useEffect, useRef } from "react";

export default function FlowingLinesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId: number;
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(dpr, dpr);

    // Line properties
    const lines = Array.from({ length: 12 }).map((_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 200 + Math.random() * 200,
      speed: 0.3 + Math.random() * 0.7,
      phase: Math.random() * Math.PI * 2,
      color: `hsla(${60 + i * 10}, 100%, 60%, 0.25)`, // Increased opacity
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      lines.forEach((line) => {
        ctx.save();
        ctx.beginPath();
        for (let t = 0; t < line.length; t += 2) {
          const angle =
            Math.sin(t / 60 + line.phase) * 0.7 +
            Math.cos(t / 80 + line.phase) * 0.5;
          const x = line.x + Math.cos(angle) * t * 0.2;
          const y = line.y + Math.sin(angle) * t * 0.7;
          if (t === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = line.color;
        ctx.shadowBlur = 16;
        ctx.stroke();
        ctx.restore();
        // Animate
        line.phase += 0.008 * line.speed;
        line.x += Math.sin(line.phase) * 0.1 * line.speed;
        line.y += Math.cos(line.phase) * 0.1 * line.speed;
        // Wrap
        if (line.x < -200) line.x = width + 200;
        if (line.x > width + 200) line.x = -200;
        if (line.y < -200) line.y = height + 200;
        if (line.y > height + 200) line.y = -200;
      });
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full min-h-full min-w-full pointer-events-none z-10"
      aria-hidden="true"
    />
  );
}
