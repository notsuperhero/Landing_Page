import { motion } from 'framer-motion';
import { Download, Sparkles, BarChart3 } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Download,
        title: 'Install and forget',
        description: "Download Focus Board, sign in, and that's it. It starts working in the background — no setup, no configuration, no learning curve.",
    },
    {
        number: '02',
        icon: Sparkles,
        title: 'It learns your rhythm',
        description: "Throughout your day, Focus Board silently figures out what you're doing. Coding? Studying. Scrolling feeds? Distraction. No manual input needed.",
    },
    {
        number: '03',
        icon: BarChart3,
        title: 'See the real picture',
        description: "Open your dashboard and the truth is right there — clean, visual, undeniable. Your peak hours, your weak spots, your progress over time.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-20 md:py-24 px-6">
            <div className="section-divider mb-24" />

            <div className="relative z-10 max-w-6xl mx-auto w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4 font-medium">How It Works</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-[family-name:var(--font-family-heading)] mb-5">
                        Three steps to
                        <span className="text-text-secondary"> total clarity</span>
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            className="relative group"
                        >
                            {/* Connecting line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[calc(50%+32px)] w-[calc(100%-32px)] h-px bg-dark-border" />
                            )}

                            <div className="card-dark p-6 h-full">
                                {/* Step number & icon row */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-accent/20 group-hover:bg-accent/[0.05] transition-all duration-500">
                                        <step.icon size={18} className="text-text-muted group-hover:text-accent transition-colors duration-500" />
                                    </div>
                                    <span className="text-xs font-mono text-text-muted">Step {step.number}</span>
                                </div>

                                <h3 className="text-lg font-medium font-[family-name:var(--font-family-heading)] text-text-primary mb-3">
                                    {step.title}
                                </h3>

                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                <div className="mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r from-accent/30 to-transparent transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
