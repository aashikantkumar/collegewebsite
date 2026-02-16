import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { Tilt } from '@/components/ui/tilt';
import { Spotlight } from '@/components/ui/spotlight';

const team = [
    {
        name: 'Prof. (Dr.) Amartya Mukherjee',
        role: 'Convener, HoD CSE(AIML), CSBS',
        image: 'https://iem-edu-in-college-faculty-images.s3.ap-south-1.amazonaws.com/images/faculty17.JPG',
        expertise: 'Drone Technologies, 5G/6G Networks, UAVs',
        email: 'amartya.mukherjee@iem.edu.in'
    },
    {
        name: 'Dr. Deepsubhra Guha Roy',
        role: 'Centre-in-Charge, Associate Professor',
        image: 'https://iem-edu-in-college-faculty-images.s3.ap-south-1.amazonaws.com/images/faculty11.JPG',
        expertise: 'Cloud Architecture, Blockchains, Databases',
        email: 'deepsubhra.guharoy@iem.edu.in'
    },
    {
        name: 'Dr. Ayan Kumar Panja',
        role: 'Senior Member',
        image: 'https://iem-edu-in-college-faculty-images.s3.ap-south-1.amazonaws.com/images/faculty8.JPG',
        expertise: 'Indoor Localization, IoT, Federated Learning',
        email: 'ayan.panja@iem.edu.in'
    },
    {
        name: 'Dr. Sreya Ghosh',
        role: 'Senior Member',
        image: 'https://iem-edu-in-college-faculty-images.s3.ap-south-1.amazonaws.com/Sreya+Ghosh.jpg',
        expertise: 'Mobile Ad hoc Networks, VANETs',
        email: ''
    },
    {
        name: 'Dr. Priti Deb',
        role: 'Senior Member',
        image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=JAQ-GIwAAAAJ&citpid=2',
        expertise: '5G/6G Networks, Green Mobile Computing, Fog Computing',
        email: ''
    },
    {
        name: 'Bipasha Guha Roy',
        role: 'Senior Member',
        image: 'https://iem-edu-in-college-faculty-images.s3.ap-south-1.amazonaws.com/Bipasha+Guna+Roy.jpeg',
        expertise: 'Cloud Computing, IoT, Generative AI',
        email: 'bipasha.mahato@iem.edu.in'
    },
    {
        name: 'Mamani Bandyopadhyay',
        role: 'Member',
        image: 'https://iem-edu-in-college-faculty-images.s3.ap-south-1.amazonaws.com/Mamani_Bandyopadhyay_02.JPG',
        expertise: 'Sensors, VLSI, FPGA',
        email: 'MAMANI.BANDYOPADHYAY@iem.edu.in'
    },
    {
        name: 'Prof. Tumpa Nath',
        role: 'Member',
        image: 'https://iem-edu-in-college-faculty-images.s3.ap-south-1.amazonaws.com/Tumpa_Nath_01.JPG',
        expertise: 'Cloud Computing',
        email: 'tumpanath1991@gmail.com'
    },
    {
        name: 'Debasree Sarkar',
        role: 'Member',
        image: 'https://iem-edu-in-college-faculty-images.s3.ap-south-1.amazonaws.com/images/faculty10.JPG',
        expertise: 'To be Filled',
        email: 'debasree.sarkar@iem.edu.in'
    },
    {
        name: 'Heerok Banerjee',
        role: 'Member',
        image: 'https://iem-edu-in-college-faculty-images.s3.ap-south-1.amazonaws.com/Heerok_Banerjee_01.JPG',
        expertise: 'Embedded Systems, Industrial IoT, LPWANs, Wireless Networks',
        email: 'Heerok.Banerjee@iem.edu.in'
    }
];

import { BeamsBackground } from '@/components/ui/beams-background';

const Team = () => {
    return (
        <BeamsBackground className="py-20" intensity="medium">
            <div id="team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
                    >
                        Our Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Meet the experts driving innovation in IoT and cloud computing
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                        >
                            <Tilt
                                rotationFactor={8}
                                isRevese
                                springOptions={{
                                    stiffness: 26.7,
                                    damping: 4.1,
                                    mass: 0.2,
                                }}
                                className="group rounded-2xl"
                            >
                                <div className="relative bg-[#0a0a16]/80 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden">
                                    {/* Spotlight effect */}
                                    <Spotlight
                                        className="z-10 from-cyan-400/30 via-cyan-500/20 to-cyan-600/5 blur-2xl"
                                        size={280}
                                        springOptions={{
                                            stiffness: 26.7,
                                            damping: 4.1,
                                            mass: 0.2,
                                        }}
                                    />

                                    {/* Image section */}
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Gradient overlay at bottom */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a16] via-[#0a0a16]/30 to-transparent" />
                                    </div>

                                    {/* Content section */}
                                    <div className="p-6 relative">
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-cyan-400 text-sm font-medium mb-3">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-500 text-sm mb-5 line-clamp-2">
                                            {member.expertise}
                                        </p>

                                        {/* Social icons */}
                                        <div className="flex gap-3">
                                            <a
                                                href="#"
                                                className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                            {member.email && (
                                                <a
                                                    href={`mailto:${member.email}`}
                                                    className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all"
                                                >
                                                    <Mail className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Corner hover accent */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </BeamsBackground>
    );
};

export default Team;


