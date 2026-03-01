import { motion } from 'framer-motion';
import { Clock, Layers, BarChart2 } from 'lucide-react';

const features = [
    {
        icon: Clock,
        title: 'Automatic Tracking',
        description: 'Runs silently in the background. No timers, no manual input.',
    },
    {
        icon: Layers,
        title: 'Smart Categorization',
        description: 'Sorts your activity into study, research, and distraction automatically.',
    },
    {
        icon: BarChart2,
        title: 'Clear Insights',
        description: 'See your peak hours, weak spots, and weekly progress at a glance.',
    },
];

export default function Features() {
    return (
        <section id="features" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-14"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Features</p>
                    <h2 className="text-xl md:text-2xl font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                        Everything runs in the background
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.35, delay: index * 0.06 }}
                            className="card p-6"
                        >
                            <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center mb-4">
                                <feature.icon size={16} className="text-text-muted" />
                            </div>
                            <h3 className="text-sm font-medium mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>
                                {feature.title}
                            </h3>
                            <p className="text-xs text-text-secondary leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
