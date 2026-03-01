import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Activity, Eye, Zap, BarChart2 } from 'lucide-react';

const floatingLabels = [
    { icon: Activity, name: 'VS Code', value: '2h 45m', x: '10%', y: '28%', delay: 0.6 },
    { icon: Eye, name: 'Focus score', value: '92.4', x: '78%', y: '55%', delay: 0.9 },
];

const trustLogos = ['Google Calendar', 'VS Code', 'Notion', 'Slack', 'Chrome', 'Outlook', 'Figma'];

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col justify-center pt-28 pb-16 px-6 overflow-hidden bg-gradient-to-b from-[#0b0b10] to-[#060608]">

            {/* Floating Data Labels */}
            {floatingLabels.map((label, i) => (
                <motion.div
                    key={label.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: label.delay }}
                    className="absolute hidden lg:flex data-label animate-float-slow z-20"
                    style={{
                        left: label.x,
                        top: label.y,
                        animationDelay: `${i * 2}s`,
                    }}
                >
                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <label.icon size={12} className="text-text-muted" />
                    </div>
                    <div>
                        <span className="block text-[11px] text-text-secondary">• {label.name}</span>
                        <span className="block text-[10px] text-text-muted font-mono">{label.value}</span>
                    </div>
                </motion.div>
            ))}

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border bg-white/[0.02] mb-8 cursor-default"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
                    <span className="text-xs text-text-secondary">Automatic focus tracking for students</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-medium font-[family-name:var(--font-family-heading)] leading-tight mb-6 tracking-[-0.03em]"
                >
                    <span className="gradient-text">Stop guessing where</span>
                    <br />
                    <span className="text-text-primary">your time goes</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="text-sm md:text-base text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed"
                >
                    Focus Board quietly watches how you spend your time — then shows
                    you the truth. No manual input. Just clarity that drives real change.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.65 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
                >
                    <a href="#cta" className="btn-primary text-sm">
                        Get started with FocusBoard
                        <ArrowUpRight size={15} />
                    </a>
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                        onClick={() => {
                            const el = document.querySelector('#features');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Learn more about features
                    </button>
                </motion.div>
            </div>

            {/* Trust Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="relative z-10 max-w-5xl mx-auto mt-auto pt-16"
            >
                <div className="section-divider mb-6" />
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                    {trustLogos.map((logo) => (
                        <span
                            key={logo}
                            className="text-xs md:text-sm text-text-muted font-medium tracking-wide cursor-default"
                        >
                            {logo}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
