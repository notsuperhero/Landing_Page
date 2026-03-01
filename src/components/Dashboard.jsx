import { motion } from 'framer-motion';
import { Gauge, Clock, BarChart2 } from 'lucide-react';

const stats = [
    { icon: Gauge, label: 'Focus Score', value: '87', suffix: '/100' },
    { icon: Clock, label: 'Deep Work', value: '4.2', suffix: 'hrs' },
    { icon: BarChart2, label: 'Productive', value: '76', suffix: '%' },
];

export default function Dashboard() {
    return (
        <section id="dashboard" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-14"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Dashboard</p>
                    <h2 className="text-xl md:text-2xl font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                        Your progress, beautifully clear
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5 }}
                    className="card overflow-hidden"
                >
                    {/* Window bar */}
                    <div className="flex items-center gap-1.5 px-5 py-3 border-b border-border">
                        <span className="w-2 h-2 rounded-full bg-border" />
                        <span className="w-2 h-2 rounded-full bg-border" />
                        <span className="w-2 h-2 rounded-full bg-border" />
                        <span className="ml-3 text-[10px] text-text-muted font-mono">dashboard</span>
                    </div>

                    <div className="p-5 md:p-6">
                        {/* Stat row */}
                        <div className="grid grid-cols-3 gap-3 mb-5">
                            {stats.map((stat) => (
                                <div key={stat.label} className="bg-bg rounded-xl p-4 border border-border">
                                    <div className="flex items-center gap-1.5 mb-2">
                                        <stat.icon size={12} className="text-text-muted" />
                                        <span className="text-[10px] text-text-muted uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-xl font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                                            {stat.value}
                                        </span>
                                        <span className="text-[10px] text-text-muted">{stat.suffix}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Weekly bars */}
                        <div className="bg-bg rounded-xl p-4 border border-border mb-5">
                            <span className="text-[10px] text-text-muted uppercase tracking-wider block mb-3">This Week</span>
                            <div className="flex items-end gap-2 h-20">
                                {[
                                    { val: 55, day: 'M' },
                                    { val: 68, day: 'T' },
                                    { val: 45, day: 'W' },
                                    { val: 80, day: 'T' },
                                    { val: 72, day: 'F' },
                                    { val: 65, day: 'S' },
                                    { val: 87, day: 'S' },
                                ].map((bar, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${bar.val}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: i * 0.04 }}
                                            className={`w-full rounded-sm ${i === 6 ? 'bg-accent/50' : 'bg-border'}`}
                                        />
                                        <span className="text-[9px] text-text-muted">{bar.day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Category breakdown */}
                        <div className="bg-bg rounded-xl p-4 border border-border">
                            <span className="text-[10px] text-text-muted uppercase tracking-wider block mb-3">Breakdown</span>
                            {[
                                { label: 'Deep Study', pct: 42, color: 'bg-accent/50' },
                                { label: 'Research', pct: 24, color: 'bg-text-muted/40' },
                                { label: 'Distraction', pct: 12, color: 'bg-red-400/30' },
                            ].map((cat) => (
                                <div key={cat.label} className="mb-2.5 last:mb-0">
                                    <div className="flex justify-between text-[11px] mb-1">
                                        <span className="text-text-secondary">{cat.label}</span>
                                        <span className="text-text-muted font-mono">{cat.pct}%</span>
                                    </div>
                                    <div className="h-1 bg-border rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${cat.pct}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.1 }}
                                            className={`h-full ${cat.color} rounded-full`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
