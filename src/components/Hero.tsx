import { motion, type Variants, type Transition } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SpiralAnimation } from '@/components/ui/spiral-animation';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';

// Container animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5,
        }
    }
};

// Floating animation for individual elements
const floatVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

// Continuous gentle float animation
const gentleFloatTransition: Transition = {
    duration: 4,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop"
};

import bgImage from '@/assets/cloud-iot-bg.png';

// Spline 3D Robot Scene URL
const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

const Hero = () => {
    return (
        <div id="home" className="relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#050510]/80 via-[#050510]/40 to-[#050510]" />

            <div className="relative z-10 flex items-center min-h-screen pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    {/* Split Layout: Left (Content + Spiral) | Right (3D Robot) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                        {/* Left Side - Content and Spiral Animation */}
                        <motion.div
                            className="text-center lg:text-left"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Badge with subtle float */}
                            <motion.span
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm"
                                variants={floatVariants}
                                animate={{ y: [0, -8, 0] }}
                                transition={gentleFloatTransition}
                            >
                                <motion.span
                                    animate={{ rotate: [0, 15, -15, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Sparkles className="w-4 h-4" />
                                </motion.span>
                                Leading the Future of Technology
                            </motion.span>

                            {/* Hero Animation Container - Spiral Animation */}
                            <motion.div
                                className="w-full h-[250px] md:h-[300px] mb-4 relative"
                                variants={floatVariants}
                            >
                                <SpiralAnimation />
                            </motion.div>

                            {/* Description with float */}
                            <motion.p
                                className="max-w-xl text-lg text-gray-300 mb-8 mx-auto lg:mx-0 drop-shadow-md"
                                variants={floatVariants}
                                animate={{ y: [0, -6, 0] }}
                                transition={{ ...gentleFloatTransition, delay: 0.5 }}
                            >
                                Driving innovation through research, industry collaboration, and cutting-edge projects in Internet of Things and Cloud Technologies.
                            </motion.p>

                            {/* Buttons with hover effects */}
                            <motion.div
                                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                                variants={floatVariants}
                            >
                                <motion.a
                                    href="#projects"
                                    className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/25"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Explore Projects
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.span>
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold"
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "rgba(255, 255, 255, 0.2)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Contact Us
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - 3D Interactive Robot */}
                        <motion.div
                            className="relative h-[400px] md:h-[500px] lg:h-[600px] hidden md:block"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <InteractiveRobotSpline
                                scene={ROBOT_SCENE_URL}
                                className="w-full h-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
