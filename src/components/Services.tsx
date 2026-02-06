import { motion } from 'framer-motion';
import { Cloud, Cpu, Database, Shield, Settings, BookOpen } from 'lucide-react';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import NeuralBackground from '@/components/ui/flow-field-background';

const services = [
    {
        icon: Cloud,
        title: 'Cloud Architecture',
        description: 'Design and implement scalable cloud infrastructure solutions tailored to your business needs.',
        features: ['Multi-cloud strategies', 'Migration planning', 'Cost optimization']
    },
    {
        icon: Cpu,
        title: 'IoT Solutions',
        description: 'End-to-end IoT solutions from sensor deployment to data analytics and visualization.',
        features: ['Device integration', 'Edge computing', 'Real-time monitoring']
    },
    {
        icon: Database,
        title: 'Big Data Analytics',
        description: 'Transform raw data into actionable insights with advanced analytics and machine learning.',
        features: ['Predictive analytics', 'Data pipelines', 'AI/ML integration']
    },
    {
        icon: Shield,
        title: 'Security & Compliance',
        description: 'Comprehensive security solutions ensuring data protection and regulatory compliance.',
        features: ['Threat detection', 'Encryption', 'Compliance audits']
    },
    {
        icon: Settings,
        title: 'System Integration',
        description: 'Seamlessly integrate IoT devices with existing enterprise systems and workflows.',
        features: ['API development', 'Legacy system integration', 'Process automation']
    },
    {
        icon: BookOpen,
        title: 'Consulting & Training',
        description: 'Expert guidance and training programs to upskill your team in IoT and cloud technologies.',
        features: ['Technology assessment', 'Workshops', 'Certification programs']
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 relative overflow-hidden">
            {/* Flow Field Animated Background */}
            <div className="absolute inset-0 z-0">
                <NeuralBackground
                    color="#22d3ee" // cyan-400 to match theme
                    trailOpacity={0.08}
                    particleCount={400}
                    speed={0.6}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Comprehensive solutions tailored for the digital age, powered by cutting-edge technology and expertise.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <CardSpotlight
                                className="h-full p-8 rounded-2xl bg-dark border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col"
                                radius={350}
                                color="#06b6d4"
                            >
                                <div className="relative z-20 flex-1 flex flex-col">
                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover/spotlight:bg-cyan-500/20 transition-colors">
                                        <service.icon className="w-6 h-6 text-cyan-400 group-hover/spotlight:text-cyan-300 transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{service.description}</p>

                                    <ul className="space-y-3 mt-auto">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-500 group-hover/spotlight:text-gray-300 transition-colors">
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 mr-3" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardSpotlight>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
