import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import HighlightCard from '@/components/ui/highlight-card';

const projects = [
    {
        title: 'Smart City Infrastructure',
        category: 'Urban IoT',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
        description: ['IoT-enabled smart city solutions for traffic management, waste management, and public safety monitoring.'],
        tech: ['IoT', 'Python', 'AWS'],
        status: 'Completed'
    },
    {
        title: 'Healthcare Monitoring',
        category: 'MedTech',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
        description: ['Remote patient monitoring system using wearable devices and cloud analytics for continuous health tracking.'],
        tech: ['React', 'Node.js', 'MQTT'],
        status: 'In Progress'
    },
    {
        title: 'Industrial Automation',
        category: 'Industry 4.0',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
        description: ['Predictive maintenance and automation solutions for manufacturing plants using edge computing.'],
        tech: ['Edge AI', 'Azure', 'C++'],
        status: 'Completed'
    },
    {
        title: 'Agricultural IoT Network',
        category: 'AgriTech',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800',
        description: ['Smart farming solutions with soil monitoring, automated irrigation, and crop health analysis using drones.'],
        tech: ['LoRa', 'Python', 'TensorFlow'],
        status: 'In Progress'
    },
    {
        title: 'Energy Management System',
        category: 'Smart Grid',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
        description: ['Intelligent energy distribution and consumption optimization for commercial buildings and industrial facilities.'],
        tech: ['IoT', 'ML', 'Power BI'],
        status: 'Completed'
    },
    {
        title: 'Supply Chain Tracking',
        category: 'Logistics',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
        description: ['End-to-end supply chain visibility with real-time tracking, temperature monitoring, and blockchain verification.'],
        tech: ['Blockchain', 'GPS', 'React'],
        status: 'In Progress'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative overflow-hidden bg-[#030712]">
            {/* Background accents - static, no animation */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
                        <p className="text-gray-400 text-lg">
                            Showcasing our latest innovations in Cloud and IoT technologies
                        </p>
                    </motion.div>
                    <motion.a
                        href="#"
                        className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-white transition-colors font-medium group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <HighlightCard
                                title={project.title}
                                description={project.description}
                                category={project.category}
                                image={project.image}
                                tech={project.tech}
                            />

                            {/* Action buttons below card */}
                            <div className="flex items-center justify-between mt-4 px-2">
                                <button className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                                    View Details
                                </button>
                                <div className="flex gap-3">
                                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors font-medium px-6 py-3 rounded-lg bg-white/5">
                        View All Projects <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

