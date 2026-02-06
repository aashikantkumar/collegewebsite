import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

// Vector utilities
interface Vector2D {
    x: number;
    y: number;
}

// Get points along text outline
function getTextPoints(text: string, fontSize: number, offsetX: number, offsetY: number): Vector2D[] {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return []

    canvas.width = 1400
    canvas.height = 300

    ctx.font = `bold ${fontSize}px Arial, sans-serif`
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, canvas.width / 2, canvas.height / 2)

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const points: Vector2D[] = []

    // Sample points from the text - larger step for better performance
    const step = 4
    for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
            const index = (y * canvas.width + x) * 4
            if (imageData.data[index + 3] > 128) {
                points.push({
                    x: x - canvas.width / 2 + offsetX,
                    y: y - canvas.height / 2 + offsetY
                })
            }
        }
    }

    return points
}

// Star/Particle class
class Star {
    private targetX: number
    private targetY: number
    private startX: number
    private startY: number
    private strokeWeightFactor: number
    private delay: number
    private disperseAngle: number
    private disperseSpeed: number
    private hue: number

    constructor(target: Vector2D, index: number, total: number) {
        this.targetX = target.x
        this.targetY = target.y

        // Start from spiral positions
        const startAngle = (index / total) * Math.PI * 10 + Math.random() * 0.3
        const startRadius = 250 + Math.random() * 150
        this.startX = startRadius * Math.cos(startAngle)
        this.startY = startRadius * Math.sin(startAngle)

        this.strokeWeightFactor = 0.8 + Math.random() * 0.4
        this.delay = (index / total) * 0.5

        this.disperseAngle = Math.random() * Math.PI * 2
        this.disperseSpeed = 1.5 + Math.random() * 2

        // Cyan to blue color
        this.hue = 185 + Math.random() * 35
    }

    render(p: number, ctx: CanvasRenderingContext2D, centerX: number, centerY: number) {
        let screenX: number, screenY: number
        let opacity = 1
        let size = 1.5 * this.strokeWeightFactor

        const adjustedP = Math.max(0, p - this.delay)

        if (p < 0.25) {
            // Converge phase (faster)
            const localP = Math.min(1, adjustedP / 0.25)
            const eased = easeOutElastic(localP)

            screenX = lerp(this.startX, this.targetX, eased)
            screenY = lerp(this.startY, this.targetY, eased)
            opacity = Math.min(1, localP * 2)
            size = 1.5 * this.strokeWeightFactor * (0.5 + eased * 0.5)
        } else if (p < 0.75) {
            // Hold phase with subtle motion (extended for readability)
            const floatTime = (p - 0.25) * 8
            const floatAmount = Math.sin(floatTime) * 1.2
            screenX = this.targetX + floatAmount * Math.cos(this.disperseAngle)
            screenY = this.targetY + floatAmount * Math.sin(this.disperseAngle)
            opacity = 1
            size = 1.5 * this.strokeWeightFactor
        } else {
            // Disperse phase
            const localP = (p - 0.75) / 0.25
            const eased = ease(localP, 2.5)

            const disperseDistance = eased * 300 * this.disperseSpeed / 2
            screenX = this.targetX + disperseDistance * Math.cos(this.disperseAngle)
            screenY = this.targetY + disperseDistance * Math.sin(this.disperseAngle)
            opacity = Math.max(0, 1 - localP * 1.3)
            size = 1.5 * this.strokeWeightFactor * (1 - localP * 0.5)
        }

        if (opacity <= 0) return

        const drawX = centerX + screenX
        const drawY = centerY + screenY

        ctx.beginPath()
        ctx.arc(drawX, drawY, Math.max(0.5, size), 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${this.hue}, 85%, 55%, ${opacity})`
        ctx.fill()
    }
}

// Easing functions
function ease(p: number, g: number): number {
    if (p < 0.5)
        return 0.5 * Math.pow(2 * p, g)
    else
        return 1 - 0.5 * Math.pow(2 * (1 - p), g)
}

function easeOutElastic(x: number): number {
    const c4 = (2 * Math.PI) / 4.5
    if (x <= 0) return 0
    if (x >= 1) return 1
    return Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1
}

function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t
}

// Animation Controller
class AnimationController {
    private timeline: gsap.core.Timeline
    private time = 0
    private ctx: CanvasRenderingContext2D
    private width: number
    private height: number
    private stars: Star[] = []
    private currentTextIndex = 0
    private texts = ['IEM Centre of Excellence for', 'Cloud Computing & IoT']

    constructor(_canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, width: number, height: number) {
        this.ctx = ctx
        this.width = width
        this.height = height
        this.timeline = gsap.timeline({ repeat: -1 })

        this.createStarsForText(this.texts[0])
        this.setupTimeline()
    }

    private createStarsForText(text: string) {
        this.stars = []
        // Adjust font size based on text length and container width
        // Assume approx 0.6 aspect ratio per character
        const maxCharWidth = 0.6
        const targetWidth = this.width * 0.9 // 90% of container width
        const charCount = text.length

        let fontSize = Math.min(60, targetWidth / (charCount * maxCharWidth))
        // Ensure minimum legible size but prefer fitting
        fontSize = Math.max(20, Math.min(fontSize, 80))

        const points = getTextPoints(text, fontSize, 0, 0)

        // Shuffle and limit points - reduced for performance
        const shuffled = points.sort(() => Math.random() - 0.5)
        const selectedPoints = shuffled.slice(0, Math.min(1500, points.length))

        selectedPoints.forEach((point, index) => {
            this.stars.push(new Star(point, index, selectedPoints.length))
        })
    }

    private setupTimeline() {
        const animateText = () => {
            this.timeline.to(this, {
                time: 1,
                duration: 8,
                ease: "none",
                onUpdate: () => this.render(),
                onComplete: () => {
                    this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length
                    this.createStarsForText(this.texts[this.currentTextIndex])
                    this.time = 0
                    animateText()
                }
            })
        }
        animateText()
    }

    public render() {
        const ctx = this.ctx
        if (!ctx) return

        // Clear to transparent
        ctx.clearRect(0, 0, this.width, this.height)

        const centerX = this.width / 2
        const centerY = this.height / 2

        // Draw all particles
        for (const star of this.stars) {
            star.render(this.time, ctx, centerX, centerY)
        }

        // Add subtle glow in center
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 300)
        gradient.addColorStop(0, 'rgba(34, 211, 238, 0.05)')
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, this.width, this.height)
    }

    public destroy() {
        this.timeline.kill()
    }

    public pause() {
        this.timeline.pause()
    }

    public resume() {
        this.timeline.resume()
    }
}

export function SpiralAnimation() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<AnimationController | null>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const [isVisible, setIsVisible] = useState(false)

    // Intersection Observer for visibility-based pausing
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        )
        observer.observe(container)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect
                setDimensions({ width, height })
            }
        })

        resizeObserver.observe(container)
        return () => resizeObserver.disconnect()
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas || dimensions.width === 0 || dimensions.height === 0) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const dpr = Math.min(window.devicePixelRatio || 1, 2) // Cap DPR at 2

        canvas.width = dimensions.width * dpr
        canvas.height = dimensions.height * dpr

        canvas.style.width = `${dimensions.width}px`
        canvas.style.height = `${dimensions.height}px`

        ctx.scale(dpr, dpr)

        // Re-initialize controller with new dimensions
        if (animationRef.current) {
            animationRef.current.destroy()
        }
        animationRef.current = new AnimationController(canvas, ctx, dimensions.width, dimensions.height)

        return () => {
            if (animationRef.current) {
                animationRef.current.destroy()
                animationRef.current = null
            }
        }
    }, [dimensions])

    // Pause/resume animation based on visibility
    useEffect(() => {
        if (animationRef.current) {
            if (isVisible) {
                animationRef.current.resume()
            } else {
                animationRef.current.pause()
            }
        }
    }, [isVisible])

    return (
        <div ref={containerRef} className="relative w-full h-full">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
        </div>
    )
}
