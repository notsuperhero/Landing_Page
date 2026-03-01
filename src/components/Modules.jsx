import { motion } from 'framer-motion';
import {
    Users,
    Radar,
    CalendarCheck,
    Tags,
} from 'lucide-react';

const modules = [
    {
        icon: Users,
        title: 'Multi-Role Access',
        tagline: 'Because accountability works better together',
        description: 'Students, parents, and counselors — each with their own view. Share progress on your terms.',
    },
    {
        icon: Radar,
        title: 'Silent Tracking',
        tagline: 'Always on, never in the way',
        description: "A lightweight background agent captures your active window, app, and URL. You'll forget it's there.",
    },
    {
        icon: CalendarCheck,
        title: 'Calendar Sync',
        tagline: 'Plan vs. reality, side by side',
        description: 'Connect Google or Outlook. See what percentage of your scheduled study time was actually productive.',
    },
    {
        icon: Tags,
        title: 'Smart Labels',
        tagline: 'Every minute gets a name',
        description: 'AI-powered categorization tags every activity as productive, neutral, or distracting. No manual work.',
    },
];

export default function Modules() {
    return (
        <section id="modules" className="relative py-20 md:py-24 px-6">
            <div className="relative z-10 max-w-6xl mx-auto w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
                >
                    <div className="max-w-xl">
                        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4 font-medium">System Modules</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-[family-name:var(--font-family-heading)] leading-tight">
                            Built to cover
                            <span className="text-text-secondary"> every angle</span>
                        </h2>
                    </div>
                    <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
                        Four integrated modules. One clear purpose: help you study better and prove your progress.
                    </p>
                </motion.div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {modules.map((mod, index) => (
                        <motion.div
                            key={mod.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="card-dark p-8 group cursor-default"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-accent/20 group-hover:bg-accent/[0.05] transition-all duration-500">
                                <mod.icon size={18} className="text-text-muted group-hover:text-accent transition-colors duration-500" />
                            </div>

                            <h3 className="text-base font-medium font-[family-name:var(--font-family-heading)] text-text-primary mb-1">
                                {mod.title}
                            </h3>
                            <p className="text-xs text-accent/80 mb-3 font-medium">
                                {mod.tagline}
                            </p>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {mod.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
