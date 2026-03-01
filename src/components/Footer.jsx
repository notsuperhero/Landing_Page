import { Zap, Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
    Product: ['Features', 'Dashboard', 'Forms', 'Pricing', 'Download'],
    Resources: ['Documentation', 'Blog', 'Changelog', 'FAQ'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Contact'],
};

const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-dark-border pt-16 pb-8 px-6">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-4 group">
                            <div className="w-7 h-7 rounded-full bg-text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <Zap size={13} className="text-dark-bg" />
                            </div>
                            <span className="text-sm font-semibold font-[family-name:var(--font-family-heading)]">
                                FocusBoard
                            </span>
                        </a>
                        <p className="text-text-muted text-xs leading-relaxed max-w-xs mb-5">
                            The quiet productivity companion for students who want clarity, not noise.
                        </p>
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-8 h-8 rounded-lg bg-white/[0.03] border border-dark-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent/20 transition-all duration-300"
                                >
                                    <social.icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4">{title}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-xs text-text-muted hover:text-text-primary transition-colors duration-300">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="border-t border-dark-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-text-muted">
                        © 2026 Focus Board. All rights reserved.
                    </p>
                    <p className="text-[11px] text-text-muted">
                        Designed for students who take focus seriously
                    </p>
                </div>
            </div>
        </footer>
    );
}
