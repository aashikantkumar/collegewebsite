"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 60 + Math.random() * 80,
        length: height * 2,
        angle: angle,
        speed: 0.3 + Math.random() * 0.5,
        opacity: 0.15 + Math.random() * 0.15,
        hue: 190 + Math.random() * 70,
    };
}

export function BeamsBackground({
    className,
    children,
    intensity = "strong",
}: AnimatedGradientBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const [isVisible, setIsVisible] = useState(false);

    // Reduced particle count for performance
    const BEAM_COUNT = 8;

    const opacityMap = {
        subtle: 0.5,
        medium: 0.7,
        strong: 0.9,
    };

    // Intersection Observer to pause when off-screen
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap DPR at 2
            const width = container.offsetWidth;
            const height = container.scrollHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);

            beamsRef.current = Array.from({ length: BEAM_COUNT }, () =>
                createBeam(width, height)
            );
        };

        updateCanvasSize();

        const resizeObserver = new ResizeObserver(() => {
            updateCanvasSize();
        });
        resizeObserver.observe(container);

        window.addEventListener("resize", updateCanvasSize);

        function resetBeam(beam: Beam, index: number) {
            if (!canvas) return beam;

            const column = index % 3;
            const spacing = canvas.width / 3;

            beam.y = canvas.height + 100;
            beam.x =
                column * spacing +
                spacing / 2 +
                (Math.random() - 0.5) * spacing * 0.5;
            beam.width = 80 + Math.random() * 100;
            beam.speed = 0.3 + Math.random() * 0.4;
            beam.hue = 190 + (index * 70) / BEAM_COUNT;
            beam.opacity = 0.15 + Math.random() * 0.1;
            return beam;
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            const finalOpacity = beam.opacity * opacityMap[intensity];
            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
            gradient.addColorStop(0.3, `hsla(${beam.hue}, 85%, 65%, ${finalOpacity})`);
            gradient.addColorStop(0.7, `hsla(${beam.hue}, 85%, 65%, ${finalOpacity})`);
            gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate() {
            if (!canvas || !ctx) return;

            // Only animate when visible
            if (!isVisible) {
                animationFrameRef.current = requestAnimationFrame(animate);
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Removed ctx.filter = "blur(35px)" - expensive operation

            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;

                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index);
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            resizeObserver.disconnect();
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity, isVisible]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative min-h-screen w-full bg-neutral-950",
                className
            )}
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ filter: "blur(20px)" }}
                />
            </div>

            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}

