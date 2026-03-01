import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Intelligence', href: '#ai' },
    { label: 'Modules', href: '#modules' },
    { label: 'Forms', href: '#forms' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="glass-nav rounded-full px-6 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-full bg-text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <Zap size={15} className="text-dark-bg" />
                        </div>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="px-3.5 py-2 text-xs md:text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 rounded-full hover:bg-white/[0.03]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center">
                        <a href="#cta" className="btn-secondary !py-2 !px-4 text-xs">
                            Get Started
                            <span className="text-accent">→</span>
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-text-primary p-2 hover:bg-white/5 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden mx-6 mt-1"
                    >
                        <div className="glass-nav rounded-2xl p-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm text-text-secondary hover:text-text-primary hover:bg-white/[0.03] px-4 py-3 rounded-xl transition-all"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="mt-2 pt-2 border-t border-dark-border">
                                <a href="#cta" className="btn-primary w-full justify-center text-sm !py-3">
                                    Get Started Free
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
