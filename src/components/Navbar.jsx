import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Forms', href: '#forms' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
            <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-sm font-semibold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    FocusBoard
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="px-3 py-1.5 text-[13px] text-text-secondary hover:text-text-primary transition-colors rounded-lg"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <a href="#cta" className="btn-primary !py-1.5 !px-4 text-xs">
                        Get Started
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-text-secondary p-1.5 hover:text-text-primary transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-border overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm text-text-secondary hover:text-text-primary py-2 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a href="#cta" onClick={() => setIsOpen(false)} className="btn-primary justify-center mt-3 text-sm !py-2.5">
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
