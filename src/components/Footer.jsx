import { Github, Twitter, Linkedin } from 'lucide-react';

const links = {
    Product: ['Features', 'Dashboard', 'Forms'],
    Company: ['About', 'Blog', 'Contact'],
    Legal: ['Privacy', 'Terms'],
};

const socials = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
    return (
        <footer className="border-t border-border pt-12 pb-8 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
                    {/* Brand */}
                    <div className="col-span-2">
                        <span className="text-sm font-semibold block mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                            FocusBoard
                        </span>
                        <p className="text-xs text-text-muted leading-relaxed max-w-xs mb-4">
                            Automatic focus tracking for students.
                        </p>
                        <div className="flex items-center gap-1.5">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-7 h-7 rounded-lg bg-card border border-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-border-hover transition-colors"
                                >
                                    <s.icon size={13} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(links).map(([title, items]) => (
                        <div key={title}>
                            <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3">{title}</h4>
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-xs text-text-secondary hover:text-text-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-border pt-5 text-[11px] text-text-muted text-center">
                    2026 FocusBoard. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
