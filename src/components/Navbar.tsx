import { useState, useEffect } from 'react';
import { Menu, X, Cloud, Home, Info, Settings, Briefcase, Users, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { TubelightNavBar } from '@/components/ui/tubelight-navbar';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');

    const navItems = [
        { name: 'Home', url: '#home', icon: Home },
        { name: 'About', url: '#about', icon: Info },
        { name: 'Services', url: '#services', icon: Settings },
        { name: 'Projects', url: '#projects', icon: Briefcase },
        { name: 'Team', url: '#team', icon: Users },
        { name: 'Contact', url: '#contact', icon: Mail },
    ];

    // Scroll spy: observe each section and update activeSection
    useEffect(() => {
        const sectionIds = ['home', 'about', 'services', 'projects', 'team', 'contact'];
        const sectionNameMap: Record<string, string> = {
            home: 'Home',
            about: 'About',
            services: 'Services',
            projects: 'Projects',
            team: 'Team',
            contact: 'Contact',
        };

        const observer = new IntersectionObserver(
            (entries) => {
                // Find the entry that is most visible
                const visible = entries.filter(e => e.isIntersecting);
                if (visible.length > 0) {
                    // Pick the one with the highest intersection ratio
                    const best = visible.reduce((a, b) =>
                        a.intersectionRatio > b.intersectionRatio ? a : b
                    );
                    const id = best.target.id;
                    if (sectionNameMap[id]) {
                        setActiveSection(sectionNameMap[id]);
                    }
                }
            },
            {
                rootMargin: '-20% 0px -60% 0px',
                threshold: [0, 0.1, 0.2, 0.3, 0.5],
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

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
                        <TubelightNavBar items={navItems} activeTab={activeSection} />
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
                            const isActive = activeSection === link.name;
                            return (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
                                            ? 'text-cyan-400 bg-cyan-500/10'
                                            : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                                        }`}
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

