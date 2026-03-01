import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, Feather, Users } from 'lucide-react';

const perks = [
    { icon: Shield, text: 'Your data never leaves your machine' },
    { icon: Feather, text: 'Lightweight — no lag, no battery drain' },
    { icon: Users, text: 'Share with parents or counselors, on your terms' },
];

export default function Pricing() {
    return (
        <section id="cta" className="relative py-20 md:py-24 px-6 overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
                <motion.div
                    className="max-w-3xl w-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-[family-name:var(--font-family-heading)] mb-6 leading-tight">
                        Ready to stop
                        <br />
                        <span className="text-text-secondary">losing time?</span>
                    </h2>

                    <p className="text-text-secondary text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
                        Every hour you study without Focus Board is an hour you can't measure,
                        can't improve, and can't prove. Start today.
                    </p>

                    {/* CTA */}
                    <div className="mb-12">
                        <a href="#" className="btn-primary text-sm !py-3.5 !px-8">
                            Get Started Free
                            <ArrowUpRight size={16} />
                        </a>
                        <p className="text-[11px] text-text-muted mt-4">No credit card required • Setup in under 2 minutes</p>
                    </div>

                    {/* Perks */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                        {perks.map((perk) => (
                            <div key={perk.text} className="flex items-center gap-2.5 group">
                                <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-accent/20 transition-all duration-300">
                                    <perk.icon size={13} className="text-text-muted group-hover:text-accent transition-colors duration-300" />
                                </div>
                                <span className="text-xs text-text-secondary group-hover:text-text-primary transition-colors">{perk.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Trust Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-dark-border"
                    >
                        {[
                            { value: '10K+', label: 'Students tracking' },
                            { value: '2M+', label: 'Hours analyzed' },
                            { value: '34%', label: 'Avg. focus gain' },
                            { value: '4.9★', label: 'Student rating' },
                        ].map((metric) => (
                            <div key={metric.label} className="text-center cursor-default">
                                <p className="text-xl md:text-2xl font-medium text-text-primary mb-1 font-[family-name:var(--font-family-heading)]">{metric.value}</p>
                                <p className="text-[10px] text-text-muted uppercase tracking-wider">{metric.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
