
import { motion } from 'framer-motion';

const stats = [
    { label: 'Projects Completed', value: '150+', color: 'text-cyan-400' },
    { label: 'Research Papers', value: '85+', color: 'text-blue-500' },
    { label: 'Industry Partners', value: '40+', color: 'text-purple-500' },
    { label: 'Team Members', value: '25+', color: 'text-pink-500' },
];

const Stats = () => {
    return (
        <section className="py-20 bg-dark-lighter border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                        >
                            <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                                {stat.value}
                            </div>
                            <div className="text-gray-400 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
