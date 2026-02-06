"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface TubelightNavBarProps {
    items: NavItem[]
    className?: string
}

export function TubelightNavBar({ items, className }: TubelightNavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0].name)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div
            className={cn(
                "flex items-center gap-1 bg-[#0a0a16]/80 border border-cyan-500/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg",
                className,
            )}
        >
            {items.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.name

                return (
                    <a
                        key={item.name}
                        href={item.url}
                        onClick={() => setActiveTab(item.name)}
                        className={cn(
                            "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-colors",
                            "text-gray-400 hover:text-cyan-400",
                            isActive && "text-white",
                        )}
                    >
                        <span className="hidden md:inline">{item.name}</span>
                        <span className="md:hidden">
                            <Icon size={18} strokeWidth={2.5} />
                        </span>
                        {isActive && (
                            <motion.div
                                layoutId="tubelight"
                                className="absolute inset-0 w-full bg-cyan-500/10 rounded-full -z-10"
                                initial={false}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                }}
                            >
                                {/* Tubelight glow effect */}
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-400 rounded-t-full">
                                    <div className="absolute w-12 h-6 bg-cyan-400/30 rounded-full blur-md -top-2 -left-2" />
                                    <div className="absolute w-8 h-6 bg-cyan-400/20 rounded-full blur-md -top-1" />
                                    <div className="absolute w-4 h-4 bg-cyan-400/30 rounded-full blur-sm top-0 left-2" />
                                </div>
                            </motion.div>
                        )}
                    </a>
                )
            })}
        </div>
    )
}
