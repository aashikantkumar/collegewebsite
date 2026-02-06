
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -right-20 top-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute -left-20 bottom-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Get In Touch
                    </motion.h2>
                    <p className="text-gray-400 text-lg">
                        Have a project in mind or want to collaborate? Reach out to us.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-cyan-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Visit Us</h3>
                                <p className="text-gray-400">
                                    IEM Management House,<br />
                                    Salt Lake Electronics Complex,<br />
                                    Kolkata, West Bengal 700091
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-cyan-400">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Call Us</h3>
                                <p className="text-gray-400">+91 98765 43210</p>
                                <p className="text-gray-400">+91 12345 67890</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-cyan-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Email Us</h3>
                                <p className="text-gray-400">contact@iem-c2iot.edu</p>
                                <p className="text-gray-400">research@iem-c2iot.edu</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-cyan-400">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Office Hours</h3>
                                <p className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                <p className="text-gray-400">Sat: 10:00 AM - 2:00 PM</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/5"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
