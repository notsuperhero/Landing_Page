import { motion } from 'framer-motion';
import {
    Crosshair,
    Brain,
    CalendarClock,
    ShieldAlert,
} from 'lucide-react';

const features = [
    {
        icon: Crosshair,
        title: 'Starts the moment you do',
        description: 'No buttons to press. No timers to set. Focus Board begins tracking the second you open your laptop.',
    },
    {
        icon: Brain,
        title: 'Knows what matters to you',
        description: 'It learns the difference between a research rabbit hole and a Reddit rabbit hole. Automatically.',
    },
    {
        icon: CalendarClock,
        title: 'Holds you to your own plan',
        description: 'Sync your calendar. See exactly how much of your "study time" was actually spent studying.',
    },
    {
        icon: ShieldAlert,
        title: 'Catches you before you fall',
        description: "When your focus starts slipping, you'll get a gentle nudge. Before you even notice it yourself.",
    },
];

export default function Features() {
    return (
        <section id="features" className="relative py-20 md:py-24 px-6">
            <div className="relative z-10 max-w-6xl mx-auto w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20 max-w-2xl"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4 font-medium">Features</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-[family-name:var(--font-family-heading)] mb-5 leading-tight">
                        Everything you need to
                        <br />
                        <span className="text-text-secondary">own your focus</span>
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        Four tools that work together silently, so you can show up for what matters.
                    </p>
                </motion.div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="card-dark p-8 group cursor-default"
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-accent/20 group-hover:bg-accent/[0.05] transition-all duration-500">
                                <feature.icon size={18} className="text-text-muted group-hover:text-accent transition-colors duration-500" />
                            </div>

                            <h3 className="text-base font-medium font-[family-name:var(--font-family-heading)] text-text-primary mb-2">
                                {feature.title}
                            </h3>

                            <p className="text-text-secondary text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
