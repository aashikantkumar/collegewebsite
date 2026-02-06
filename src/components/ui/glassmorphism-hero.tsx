import { useEffect, useRef, useState } from "react";
import {
    ArrowRight,
    Play,
    Target,
    Crown,
    Star,
    Cloud,
    Cpu,
    Wifi,
    Server,
    Database,
    Network
} from "lucide-react";
import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-bg-glassmorphism.png";
import { SpiralAnimation } from "./spiral-animation";


// Partners/Collaborators for marquee
const PARTNERS = [
    { name: "IEM Kolkata", icon: Server },
    { name: "Cloud Research", icon: Cloud },
    { name: "IoT Lab", icon: Cpu },
    { name: "Data Center", icon: Database },
    { name: "Network Hub", icon: Network },
    { name: "Smart Systems", icon: Wifi },
];

// Stat item component
const StatItem = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
        <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
        <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium sm:text-xs">{label}</span>
    </div>
);

// Main Hero component
export default function GlassmorphismHero() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for visibility-based optimization
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            id="home"
            className="relative w-full min-h-screen bg-[#050510] text-white overflow-hidden font-sans"
        >
            {/* Scoped CSS Animations */}
            <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

            {/* Background Image with Gradient Mask */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    maskImage: "linear-gradient(180deg, transparent, black 10%, black 80%, transparent)",
                    WebkitMaskImage: "linear-gradient(180deg, transparent, black 10%, black 80%, transparent)",
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#050510]/60 via-transparent to-[#050510]" />

            {/* Main Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">

                    {/* LEFT COLUMN - Content */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">

                        {/* Spiral Animation */}
                        <div className="w-full h-[120px] mb-4">
                            <SpiralAnimation />
                        </div>

                        {/* Badge */}
                        <div className="animate-fade-in delay-100">
                            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-md transition-colors hover:bg-cyan-500/20">
                                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                                    IEM Centre of Excellence
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                </span>
                            </div>
                        </div>

                        {/* Heading */}
                        <motion.h1
                            className="animate-fade-in delay-200 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-white">Leading the Future of</span>
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Cloud Computing
                            </span>
                            <br />
                            <span className="text-white">&</span>{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                IoT
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <p className="animate-fade-in delay-300 max-w-xl text-lg text-zinc-400 leading-relaxed">
                            Pioneering research and innovation in cloud infrastructure, IoT systems,
                            and next-generation computing technologies at IEM Kolkata.
                        </p>

                        {/* CTA Buttons */}
                        <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#projects"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98]"
                            >
                                Explore Projects
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>

                            <a
                                href="#about"
                                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-cyan-500/30"
                            >
                                <Play className="w-4 h-4 fill-current" />
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Stats Card */}
                    <div className="lg:col-span-5 space-y-6 lg:mt-12">

                        {/* Stats Card */}
                        <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
                            {/* Card Glow Effect */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 ring-1 ring-cyan-500/30">
                                        <Target className="h-6 w-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold tracking-tight text-white">25+</div>
                                        <div className="text-sm text-zinc-400">Research Projects</div>
                                    </div>
                                </div>

                                {/* Progress Bar Section */}
                                <div className="space-y-3 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-zinc-400">Research Excellence</span>
                                        <span className="text-cyan-400 font-medium">95%</span>
                                    </div>
                                    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/50">
                                        <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                                    </div>
                                </div>

                                <div className="h-px w-full bg-white/10 mb-6" />

                                {/* Mini Stats Grid */}
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <StatItem value="10+" label="Faculty" />
                                    <StatItem value="50+" label="Publications" />
                                    <StatItem value="100%" label="Innovation" />
                                </div>

                                {/* Tag Pills */}
                                <div className="mt-8 flex flex-wrap gap-2">
                                    <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium tracking-wide text-cyan-300">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        ACTIVE RESEARCH
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                                        <Crown className="w-3 h-3 text-yellow-500" />
                                        EXCELLENCE
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partners Marquee Card */}
                        <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-6 backdrop-blur-xl">
                            <h3 className="mb-4 px-6 text-xs font-medium text-zinc-500 uppercase tracking-wider">Research Domains</h3>

                            <div
                                className="relative flex overflow-hidden"
                                style={{
                                    maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                                    WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
                                }}
                            >
                                <div className="animate-marquee flex gap-10 whitespace-nowrap px-4">
                                    {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 opacity-60 transition-all hover:opacity-100 cursor-default"
                                        >
                                            <partner.icon className="h-5 w-5 text-cyan-400" />
                                            <span className="text-sm font-medium text-white tracking-tight">
                                                {partner.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
