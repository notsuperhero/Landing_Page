import { motion } from 'framer-motion';
import {
    Users,
    Radar,
    CalendarCheck,
    Tags,
    LayoutDashboard,
    FileText,
    ArrowUpRight,
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
    {
        icon: LayoutDashboard,
        title: 'Live Dashboard',
        tagline: 'Your day, visualized beautifully',
        description: 'Real-time timelines, focus scores, pie charts, and weekly breakdowns — all in one place.',
    },
    {
        icon: FileText,
        title: 'Reports on Demand',
        tagline: 'Proof of your progress',
        description: 'Generate clean PDF or CSV reports — daily timelines, weekly summaries, focus scores.',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Modules() {
    return (
        <section id="modules" className="relative py-20 md:py-24 px-6">
            <div className="section-divider mb-24" />

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
                        Six integrated modules. One clear purpose: help you study better and prove your progress.
                    </p>
                </motion.div>

                {/* Modules Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {modules.map((mod, index) => (
                        <motion.div
                            key={mod.title}
                            variants={cardVariants}
                            className="card-dark p-6 group cursor-default"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-accent/20 group-hover:bg-accent/[0.05] transition-all duration-500">
                                    <mod.icon size={18} className="text-text-muted group-hover:text-accent transition-colors duration-500" />
                                </div>
                                <span className="text-[10px] text-text-muted font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">0{index + 1}</span>
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

                            <div className="mt-5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-0 group-hover:translate-x-1">
                                <span className="text-xs text-accent">Learn more</span>
                                <ArrowUpRight size={12} className="text-accent" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
