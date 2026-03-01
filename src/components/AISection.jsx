import { motion } from 'framer-motion';
import { Cpu, TrendingUp, Layers, Activity } from 'lucide-react';

const capabilities = [
    {
        icon: Cpu,
        title: 'Auto-Categorize Activities',
        description: 'Open VS Code? Study. Scrolling Instagram? Distraction. Focus Board reads context — you never categorize anything yourself.',
    },
    {
        icon: TrendingUp,
        title: 'Detect Focus Drift',
        description: 'Tracks your baseline over weeks. When productivity dips below your personal average, it flags it — before burnout hits.',
    },
    {
        icon: Layers,
        title: 'Reconstruct Sessions',
        description: 'Groups your activity into natural work sessions — revealing flow states, scatter patterns, and ideal break times.',
    },
    {
        icon: Activity,
        title: 'Weighted Focus Score',
        description: "Not all hours are equal. Your score weighs recent effort more, so this morning's deep work matters more than last Tuesday's.",
    },
];

export default function AISection() {
    return (
        <section id="ai" className="relative py-20 md:py-24 px-6 overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4 font-medium">Intelligence</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-[family-name:var(--font-family-heading)] mb-5 leading-tight">
                        Meet Marvellous
                        <br />
                        <span className="text-text-secondary">Insights</span>
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        Focus Board doesn't just collect data — it thinks about it. So you spend less time tracking and more time doing.
                    </p>
                </motion.div>

                {/* Grid: stats card + capabilities */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Big stat card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 card-dark p-8 flex flex-col justify-between"
                    >
                        <div>
                            <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Focus Score · Today</p>
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-6xl md:text-7xl font-light font-[family-name:var(--font-family-heading)] text-text-primary">98.2</span>
                                <span className="text-lg text-text-muted">%</span>
                            </div>
                            <p className="text-xs text-accent">{'↑ 3.4% from yesterday'}</p>
                        </div>

                        {/* Mini bar chart */}
                        <div className="mt-8">
                            <div className="flex items-center justify-between text-[10px] text-text-muted mb-2">
                                <span>Mon</span><span>Your timeline</span>
                            </div>
                            <div className="flex items-end gap-1 h-16">
                                {[40, 65, 50, 80, 70, 90, 85].map((val, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${val}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.06 }}
                                        className={`flex-1 rounded-sm ${i === 6 ? 'bg-accent/60' : 'bg-white/[0.08]'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Capability cards */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card-dark p-6 group"
                            >
                                <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:border-accent/20 group-hover:bg-accent/[0.05] transition-all duration-500">
                                    <cap.icon size={16} className="text-text-muted group-hover:text-accent transition-colors duration-500" />
                                </div>

                                <h3 className="text-sm font-medium text-text-primary mb-2">{cap.title}</h3>
                                <p className="text-xs text-text-secondary leading-relaxed">{cap.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
