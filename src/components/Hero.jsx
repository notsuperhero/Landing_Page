import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-4 text-balance"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Focus, measured.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-sm md:text-base text-text-secondary mb-8 max-w-md leading-relaxed"
                >
                    Automatic tracking for students. No manual input.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center gap-3"
                >
                    <a href="#cta" className="btn-primary">
                        Get Started
                        <ArrowRight size={14} />
                    </a>
                    <a href="#dashboard" className="btn-secondary">
                        View Dashboard
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
