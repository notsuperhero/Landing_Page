import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Pricing() {
    return (
        <section id="cta" className="py-24 px-6">
            <div className="max-w-lg mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                        Start focusing better today.
                    </h2>
                    <p className="text-sm text-text-secondary mb-8">
                        Free to start. No credit card required.
                    </p>
                    <a href="#" className="btn-primary">
                        Get Started Free
                        <ArrowRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
