
import { motion } from 'framer-motion';
import { Target, Award, Users, TrendingUp } from 'lucide-react';
import { CardSpotlight } from '@/components/ui/card-spotlight';

const values = [
    {
        icon: Target,
        title: 'Mission',
        description: 'To drive innovation in IoT and cloud technologies through cutting-edge research and practical applications.'
    },
    {
        icon: Award,
        title: 'Excellence',
        description: 'Committed to maintaining the highest standards in research, development, and implementation.'
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'Fostering partnerships between academia, industry, and government for impactful solutions.'
    },
    {
        icon: TrendingUp,
        title: 'Innovation',
        description: 'Continuously exploring emerging technologies and methodologies to stay ahead of the curve.'
    }
];

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#050510] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                    >
                        About Our Centre
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl font-light max-w-3xl mx-auto"
                    >
                        Leading the way in IoT and cloud computing research, development, and implementation
                    </motion.p>
                </div>

                {/* Two Column Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-left border-l-4 border-cyan-500 pl-4">Who We Are</h3>
                        <div className="space-y-6 text-gray-400 leading-relaxed text-justify">
                            <p>
                                The IoT & Cloud Centre of Excellence is a premier research and development hub dedicated to advancing the fields of Internet of Things and cloud computing. We bridge the gap between academic research and industry application, creating innovative solutions that address real-world challenges.
                            </p>
                            <p>
                                Our multidisciplinary team comprises experts in computer science, engineering, data analytics, and business strategy, working collaboratively to push the boundaries of what's possible in connected technologies.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-left border-l-4 border-blue-600 pl-4">What We Do</h3>
                        <div className="space-y-6 text-gray-400 leading-relaxed text-justify">
                            <p>
                                We focus on developing scalable, secure, and sustainable IoT and cloud solutions for various industries including healthcare, manufacturing, smart cities, and agriculture. Our work encompasses research, prototyping, implementation, and knowledge transfer.
                            </p>
                            <p>
                                Through strategic partnerships and collaborative projects, we help organizations leverage cutting-edge technologies to transform their operations, improve efficiency, and create new value streams.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                        >
                            <CardSpotlight
                                className="p-8 rounded-2xl bg-[#0a0a16] border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                                radius={300}
                                color="#06b6d4" // cyan-500
                            >
                                <div className="relative z-20">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center mb-6 group-hover/spotlight:scale-110 transition-transform duration-300">
                                        <item.icon className="w-7 h-7 text-cyan-400 group-hover/spotlight:text-cyan-300 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </CardSpotlight>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
