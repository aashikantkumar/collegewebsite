import { useState } from 'react';
import { Menu, X, Cloud, Home, Info, Settings, Briefcase, Users, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { TubelightNavBar } from '@/components/ui/tubelight-navbar';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', url: '#home', icon: Home },
        { name: 'About', url: '#about', icon: Info },
        { name: 'Services', url: '#services', icon: Settings },
        { name: 'Projects', url: '#projects', icon: Briefcase },
        { name: 'Team', url: '#team', icon: Users },
        { name: 'Contact', url: '#contact', icon: Mail },
    ];

    return (
        <nav className="fixed w-full z-50 bg-[#030712]/90 backdrop-blur-md border-b border-cyan-500/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg">
                            <Cloud className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            IoT & Cloud CoE
                        </span>
                    </div>

                    {/* Desktop Tubelight Navigation */}
                    <div className="hidden md:block">
                        <TubelightNavBar items={navItems} />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-cyan-400 p-2 transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-[#030712] border-b border-cyan-500/10"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Icon className="w-5 h-5" />
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
