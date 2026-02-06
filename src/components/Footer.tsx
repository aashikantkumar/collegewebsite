import {
    Cloud,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon,
    Mail,
} from 'lucide-react';

const Footer = () => {
    const year = new Date().getFullYear();

    const quickLinks = [
        { title: 'Home', href: '#home' },
        { title: 'About', href: '#about' },
        { title: 'Services', href: '#services' },
        { title: 'Projects', href: '#projects' },
        { title: 'Team', href: '#team' },
    ];

    const resources = [
        { title: 'Cloud Architecture', href: '#services' },
        { title: 'IoT Solutions', href: '#services' },
        { title: 'Big Data Analytics', href: '#services' },
        { title: 'Security & Compliance', href: '#services' },
        { title: 'Contact Us', href: '#contact' },
    ];

    const socialLinks = [
        { icon: <GithubIcon className="w-4 h-4" />, link: '#' },
        { icon: <LinkedinIcon className="w-4 h-4" />, link: '#' },
        { icon: <TwitterIcon className="w-4 h-4" />, link: '#' },
        { icon: <InstagramIcon className="w-4 h-4" />, link: '#' },
        { icon: <YoutubeIcon className="w-4 h-4" />, link: '#' },
        { icon: <Mail className="w-4 h-4" />, link: '#' },
    ];

    return (
        <footer className="relative bg-[#030712]">
            {/* Top border gradient */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-6 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-6 md:col-span-3 flex flex-col gap-5">
                        <a href="#" className="flex items-center gap-2 w-max">
                            <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg">
                                <Cloud className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-lg font-bold text-white">IoT & Cloud CoE</span>
                        </a>
                        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                            Empowering the next generation of innovators through cloud computing and IoT research at IEM Centre of Excellence.
                        </p>
                        <div className="flex gap-2">
                            {socialLinks.map((item, i) => (
                                <a
                                    key={i}
                                    className="p-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                                    target="_blank"
                                    href={item.link}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-3 md:col-span-1">
                        <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3 block">
                            Quick Links
                        </span>
                        <div className="flex flex-col gap-2">
                            {quickLinks.map(({ href, title }, i) => (
                                <a
                                    key={i}
                                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors w-max"
                                    href={href}
                                >
                                    {title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="col-span-3 md:col-span-2">
                        <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3 block">
                            Services
                        </span>
                        <div className="flex flex-col gap-2">
                            {resources.map(({ href, title }, i) => (
                                <a
                                    key={i}
                                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors w-max"
                                    href={href}
                                >
                                    {title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {year} IEM Centre of Excellence for IoT & Cloud Computing. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
