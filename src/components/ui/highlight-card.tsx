"use client";

import type { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface HighlightCardProps {
    title: string;
    description: string[];
    icon?: ReactNode;
    category?: string;
    image?: string;
    tech?: string[];
}

const HighlightCard: FC<HighlightCardProps> = ({
    title,
    description,
    icon,
    category,
    image,
    tech
}) => {
    return (
        <div className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-rotate-0.5">
            <Card className="text-white rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-[#0a0a16] via-[#0f0f1a] to-[#0a0a16] shadow-2xl relative backdrop-blur-xl overflow-hidden hover:border-cyan-500/40 hover:shadow-cyan-500/10 hover:shadow-2xl h-full">

                {/* Animated background effects */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-blue-500/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-cyan-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700"></div>
                    <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-cyan-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>

                {/* Image section */}
                {image && (
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a16] via-[#0a0a16]/50 to-transparent opacity-90" />
                        {category && (
                            <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                                {category}
                            </span>
                        )}
                    </div>
                )}

                {/* Content section */}
                <div className="p-6 relative z-10 flex flex-col">
                    {/* Icon */}
                    {icon && !image && (
                        <div className="relative mb-4 self-start">
                            <div className="p-4 rounded-xl backdrop-blur-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 shadow-lg transform group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-500">
                                <div className="transform group-hover:rotate-12 transition-transform duration-500">
                                    {icon}
                                </div>
                            </div>
                        </div>
                    )}

                    <h3 className="mb-3 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {title}
                    </h3>

                    <div className="space-y-1 flex-grow">
                        {description.map((line, idx) => (
                            <p
                                key={idx}
                                className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                            >
                                {line}
                            </p>
                        ))}
                    </div>

                    {/* Tech tags */}
                    {tech && tech.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Animated bottom line */}
                    <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
        </div>
    );
};

export default HighlightCard;
