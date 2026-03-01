import { motion } from 'framer-motion';
import { Monitor, Gauge, Clock, BarChart2 } from 'lucide-react';

export default function Dashboard() {
    return (
        <section className="relative py-20 md:py-24 px-6 overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4 font-medium">Dashboard</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-[family-name:var(--font-family-heading)] mb-5">
                        Your progress,
                        <span className="text-text-secondary"> beautifully clear</span>
                    </h2>
                </motion.div>

                {/* Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8 }}
                    className="card-dark !rounded-2xl overflow-hidden hover:!transform-none"
                >
                    {/* Top bar */}
                    <div className="flex items-center gap-2 px-6 py-4 border-b border-dark-border">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="ml-3 text-[11px] text-text-muted font-mono">Focus Board — Dashboard</span>
                    </div>

                    <div className="p-6 md:p-8 space-y-6">
                        {/* Stat row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: Gauge, label: 'Focus Score', value: '87', unit: '/100', change: '↑ 12%' },
                                { icon: Clock, label: 'Deep Work', value: '4.2', unit: 'hrs', change: '↑ 23%' },
                                { icon: BarChart2, label: 'Productive', value: '76', unit: '%', change: '↑ 8%' },
                                { icon: Monitor, label: 'Top App', value: 'VS Code', unit: '', change: '2h 45m' },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-dark-bg/80 rounded-xl p-4 border border-dark-border group hover:border-accent/15 transition-all duration-300">
                                    <div className="flex items-center gap-2 mb-3">
                                        <stat.icon size={14} className="text-text-muted" />
                                        <span className="text-[10px] text-text-muted uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-medium text-text-primary font-[family-name:var(--font-family-heading)]">{stat.value}</span>
                                        <span className="text-xs text-text-muted">{stat.unit}</span>
                                    </div>
                                    <p className="text-[10px] text-accent mt-2">{stat.change}</p>
                                </div>
                            ))}
                        </div>

                        {/* Two-column: chart + breakdown */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Weekly bars */}
                            <div className="bg-dark-bg/80 rounded-xl p-5 border border-dark-border">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs text-text-muted uppercase tracking-wider">Weekly Trend</span>
                                    <span className="text-[10px] text-accent bg-accent/10 px-2 py-1 rounded-full">This Week</span>
                                </div>
                                <div className="flex items-end gap-2 h-24">
                                    {[
                                        { val: 55, label: 'M' },
                                        { val: 68, label: 'T' },
                                        { val: 45, label: 'W' },
                                        { val: 80, label: 'T' },
                                        { val: 72, label: 'F' },
                                        { val: 65, label: 'S' },
                                        { val: 87, label: 'S' },
                                    ].map((bar, i) => (
                                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${bar.val}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                                className={`w-full rounded-sm ${i === 6 ? 'bg-accent/50' : 'bg-white/[0.06]'}`}
                                            />
                                            <span className="text-[9px] text-text-muted">{bar.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Category breakdown */}
                            <div className="bg-dark-bg/80 rounded-xl p-5 border border-dark-border">
                                <span className="text-xs text-text-muted uppercase tracking-wider block mb-4">Time Breakdown</span>
                                {[
                                    { label: 'Deep Study', pct: 42, color: 'bg-accent/50' },
                                    { label: 'Research', pct: 24, color: 'bg-white/20' },
                                    { label: 'Communication', pct: 15, color: 'bg-white/10' },
                                    { label: 'Distraction', pct: 12, color: 'bg-red-400/30' },
                                    { label: 'Idle / Break', pct: 7, color: 'bg-white/[0.06]' },
                                ].map((cat) => (
                                    <div key={cat.label} className="mb-3 last:mb-0">
                                        <div className="flex justify-between text-[11px] mb-1">
                                            <span className="text-text-secondary">{cat.label}</span>
                                            <span className="text-text-muted font-mono">{cat.pct}%</span>
                                        </div>
                                        <div className="h-1 bg-dark-border rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${cat.pct}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.2 }}
                                                className={`h-full ${cat.color} rounded-full`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="bg-dark-bg/80 rounded-xl p-5 border border-dark-border">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs text-text-muted uppercase tracking-wider">Today's Timeline</span>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    <span className="text-[10px] text-accent">Live</span>
                                </div>
                            </div>
                            <div className="flex gap-[2px] h-8 rounded-lg overflow-hidden">
                                <div className="bg-accent/40 flex-[3] rounded-l-md" title="VS Code" />
                                <div className="bg-white/10 flex-[1]" title="Chrome — Research" />
                                <div className="bg-red-400/20 flex-[0.4]" title="Instagram" />
                                <div className="bg-accent/40 flex-[2]" title="VS Code" />
                                <div className="bg-white/10 flex-[1.5]" title="Notion" />
                                <div className="bg-white/[0.04] flex-[0.5]" title="Idle" />
                                <div className="bg-accent/40 flex-[2.5] rounded-r-md" title="VS Code" />
                            </div>
                            <div className="flex justify-between mt-2 text-[9px] text-text-muted font-mono">
                                <span>09:00</span><span>12:00</span><span>15:00</span><span>18:00</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
