import { motion } from 'framer-motion';
import {
    Crosshair,
    Brain,
    CalendarClock,
    ShieldAlert,
    LayoutGrid,
    ShieldCheck,
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
    {
        icon: LayoutGrid,
        title: 'Replays your day in blocks',
        description: "See your entire day as a visual timeline. Spot your power hours and dead zones instantly.",
    },
    {
        icon: ShieldCheck,
        title: 'Your data stays yours',
        description: "Everything lives on your machine. No cloud snooping. Export or delete it all with one click.",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

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
                        Six tools that work together silently, so you can show up for what matters.
                    </p>
                </motion.div>

                {/* Feature Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            variants={cardVariants}
                            className="card-dark p-6 group cursor-default"
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

                            {/* Bottom accent line */}
                            <div className="mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r from-accent/30 to-transparent transition-all duration-700" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
