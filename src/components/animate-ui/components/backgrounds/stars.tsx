'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  opacity: number;
}

interface StarsBackgroundProps {
  starColor?: string;
  className?: string;
  starCount?: number;
  speed?: number;
  useTheme?: boolean;
}

export const StarsBackground = ({
  starColor,
  className = '',
  starCount = 100,
  speed = 0.5,
  useTheme: useThemeColor = false,
}: StarsBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();

  // Determinar el color de las estrellas con mejor contraste
  const finalStarColor = useThemeColor
    ? (resolvedTheme === 'dark' ? '#FFFFFF' : '#1A1A1A') // Blanco brillante y negro profundo
    : (starColor || '#FFF');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const createStars = () => {
      const stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1, // Estrellas más grandes
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          opacity: resolvedTheme === 'dark'
            ? Math.random() * 0.3 + 0.7  // Muy brillantes en modo oscuro
            : Math.random() * 0.4 + 0.6, // Muy visibles en modo claro
        });
      }
      return stars;
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Efecto de brillo más intenso
        if (resolvedTheme === 'light') {
          // Halo brillante para modo claro
          ctx.shadowColor = finalStarColor + '40'; // Color con 25% opacidad
          ctx.shadowBlur = 8;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
        } else {
          // Halo brillante para modo oscuro
          ctx.shadowColor = finalStarColor + '60'; // Color con 37% opacidad
          ctx.shadowBlur = 12;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
        }

        // Dibujar halo exterior
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = finalStarColor;
        ctx.globalAlpha = star.opacity * 0.3;
        ctx.fill();

        // Dibujar estrella principal
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = finalStarColor;
        ctx.globalAlpha = star.opacity;
        ctx.fill();

        // Dibujar núcleo brillante
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = finalStarColor;
        ctx.globalAlpha = Math.min(1, star.opacity + 0.3);
        ctx.fill();
      });
    };

    const updateStars = () => {
      starsRef.current.forEach((star) => {
        // Movimiento base
        star.x += star.vx;
        star.y += star.vy;

        // Interacción con el mouse
        const dx = mouseRef.current.x - star.x;
        const dy = mouseRef.current.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Si el mouse está cerca, las estrellas se alejan
        if (distance < 100) {
          const force = (100 - distance) / 100;
          star.x -= (dx / distance) * force * 2;
          star.y -= (dy / distance) * force * 2;
        }

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });
    };

    const animate = () => {
      updateStars();
      drawStars();
      animationId = requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      starsRef.current = createStars();
      drawStars();
      animate();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = canvas.width / 2;
      mouseRef.current.y = canvas.height / 2;
    };

    init();

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [finalStarColor, starCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 w-full h-full', className)}
      style={{ pointerEvents: 'auto' }}
    />
  );
};

// Componente wrapper para uso fácil con tema automático
export const StarsInteractive = ({
  className,
  starCount = 120, // Más estrellas para mayor impacto
  speed = 0.3,
  ...props
}: Omit<StarsBackgroundProps, 'useTheme'>) => {
  return (
    <div className={cn('absolute inset-0 w-full h-full', className)}>
      <StarsBackground
        starCount={starCount}
        speed={speed}
        useTheme={true}
        className="absolute inset-0 w-full h-full"
        {...props}
      />
    </div>
  );
};
