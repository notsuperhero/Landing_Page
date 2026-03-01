import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FolderOpen, Target, Mail, Loader2, Check, AlertCircle } from 'lucide-react';
import { eventsApi, categoriesApi, goalsApi, leadsApi } from '../lib/api';

const tabs = [
    { id: 'event', label: 'Calendar Event', icon: Calendar },
    { id: 'category', label: 'Categories', icon: FolderOpen },
    { id: 'goal', label: 'Goals', icon: Target },
    { id: 'contact', label: 'Contact', icon: Mail },
];

export default function FormsSection() {
    const [activeTab, setActiveTab] = useState('event');
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        categoriesApi.getAll().then((r) => setCategories(r.data || [])).catch(() => setCategories([]));
    }, []);

    const showMsg = (type, text) => {
        setMessage({ type, text });
        setTimeout(() => setMessage({ type: '', text: '' }), 4000);
    };

    // -- Event --
    const [eventForm, setEventForm] = useState({
        title: '', category_id: '', start_time: '', end_time: '', priority: 3, is_recurring: false, label_color: '#7dd4a3', user_id: 'landing-user',
    });
    const handleEventSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await eventsApi.create({ ...eventForm, category_id: eventForm.category_id || undefined, end_time: eventForm.end_time || undefined, label_color: eventForm.label_color || undefined });
            setEventForm({ title: '', category_id: '', start_time: '', end_time: '', priority: 3, is_recurring: false, label_color: '#7dd4a3', user_id: 'landing-user' });
            showMsg('success', 'Event created.');
        } catch (err) { showMsg('error', err.message || 'Failed to create event.'); }
        finally { setLoading(false); }
    };

    // -- Category --
    const [categoryForm, setCategoryForm] = useState({ name: '', description: '' });
    const handleCategorySubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await categoriesApi.create(categoryForm);
            setCategoryForm({ name: '', description: '' });
            const res = await categoriesApi.getAll();
            setCategories(res.data || []);
            showMsg('success', 'Category created.');
        } catch (err) { showMsg('error', err.message || 'Failed to create category.'); }
        finally { setLoading(false); }
    };

    // -- Goal --
    const [goalForm, setGoalForm] = useState({
        title: '', target_deep_work: 60, distraction_limit: 5, priority_tasks: '', notes: '', date: new Date().toISOString().slice(0, 10), user_id: 'landing-user',
    });
    const handleGoalSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await goalsApi.create({ ...goalForm, priority_tasks: goalForm.priority_tasks ? goalForm.priority_tasks.split(',').map((s) => s.trim()).filter(Boolean) : [] });
            setGoalForm({ title: '', target_deep_work: 60, distraction_limit: 5, priority_tasks: '', notes: '', date: new Date().toISOString().slice(0, 10), user_id: 'landing-user' });
            showMsg('success', 'Goal created.');
        } catch (err) { showMsg('error', err.message || 'Failed to create goal.'); }
        finally { setLoading(false); }
    };

    // -- Contact --
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await leadsApi.create(contactForm);
            setContactForm({ name: '', email: '', message: '' });
            showMsg('success', "Thanks! We'll be in touch.");
        } catch (err) { showMsg('error', err.message || 'Failed to send message.'); }
        finally { setLoading(false); }
    };

    const inputCls = 'w-full px-3.5 py-2.5 rounded-xl bg-bg border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent/40 transition-colors';
    const labelCls = 'block text-xs text-text-secondary mb-1';

    return (
        <section id="forms" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-14"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3">Forms</p>
                    <h2 className="text-xl md:text-2xl font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                        Manage events, categories, and goals
                    </h2>
                </motion.div>

                {/* Status message */}
                {message.text && (
                    <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mb-5 flex items-center gap-2 px-3 py-2 rounded-lg border text-xs ${message.type === 'success' ? 'bg-accent/5 border-accent/20 text-accent' : 'bg-red-500/5 border-red-500/20 text-red-400'}`}
                    >
                        {message.type === 'success' ? <Check size={14} /> : <AlertCircle size={14} />}
                        <span>{message.text}</span>
                    </motion.div>
                )}

                {/* Tabs */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === tab.id ? 'bg-accent/10 border border-accent/30 text-accent' : 'bg-card border border-border text-text-secondary hover:text-text-primary hover:border-border-hover'}`}
                        >
                            <tab.icon size={13} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {/* Form */}
                    <div className="lg:col-span-2 card p-5 md:p-6">
                        {activeTab === 'event' && (
                            <form onSubmit={handleEventSubmit} className="space-y-3.5">
                                <h3 className="text-sm font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>New event</h3>
                                <div>
                                    <label className={labelCls}>Title</label>
                                    <input type="text" value={eventForm.title} onChange={(e) => setEventForm((p) => ({ ...p, title: e.target.value }))} className={inputCls} placeholder="e.g. Study block" required />
                                </div>
                                <div>
                                    <label className={labelCls}>Category</label>
                                    <select value={eventForm.category_id} onChange={(e) => setEventForm((p) => ({ ...p, category_id: e.target.value }))} className={inputCls}>
                                        <option value="">None</option>
                                        {categories.map((c) => (<option key={c._id} value={c._id}>{c.name}</option>))}
                                    </select>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className={labelCls}>Start</label>
                                        <input type="datetime-local" value={eventForm.start_time} onChange={(e) => setEventForm((p) => ({ ...p, start_time: e.target.value }))} className={inputCls} required />
                                    </div>
                                    <div>
                                        <label className={labelCls}>End</label>
                                        <input type="datetime-local" value={eventForm.end_time} onChange={(e) => setEventForm((p) => ({ ...p, end_time: e.target.value }))} className={inputCls} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3 items-end">
                                    <div>
                                        <label className={labelCls}>Priority</label>
                                        <select value={eventForm.priority} onChange={(e) => setEventForm((p) => ({ ...p, priority: Number(e.target.value) }))} className={inputCls}>
                                            <option value={1}>High</option>
                                            <option value={2}>Medium</option>
                                            <option value={3}>Low</option>
                                        </select>
                                    </div>
                                    <label className="flex items-center gap-1.5 text-xs text-text-secondary cursor-pointer pb-1">
                                        <input type="checkbox" checked={eventForm.is_recurring} onChange={(e) => setEventForm((p) => ({ ...p, is_recurring: e.target.checked }))} className="rounded border-border bg-bg text-accent focus:ring-accent" />
                                        Recurring
                                    </label>
                                    <div>
                                        <label className={labelCls}>Color</label>
                                        <input type="color" value={eventForm.label_color} onChange={(e) => setEventForm((p) => ({ ...p, label_color: e.target.value }))} className="h-9 w-14 rounded-lg border border-border cursor-pointer" />
                                    </div>
                                </div>
                                <button type="submit" className="btn-primary mt-2 flex items-center gap-2" disabled={loading}>
                                    {loading && <Loader2 size={14} className="animate-spin" />} Create event
                                </button>
                            </form>
                        )}

                        {activeTab === 'category' && (
                            <form onSubmit={handleCategorySubmit} className="space-y-3.5">
                                <h3 className="text-sm font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>New category</h3>
                                <div>
                                    <label className={labelCls}>Name</label>
                                    <input type="text" value={categoryForm.name} onChange={(e) => setCategoryForm((p) => ({ ...p, name: e.target.value }))} className={inputCls} placeholder="e.g. Deep work" required />
                                </div>
                                <div>
                                    <label className={labelCls}>Description</label>
                                    <textarea value={categoryForm.description} onChange={(e) => setCategoryForm((p) => ({ ...p, description: e.target.value }))} className={inputCls} rows={2} placeholder="Optional" />
                                </div>
                                <button type="submit" className="btn-primary mt-2 flex items-center gap-2" disabled={loading}>
                                    {loading && <Loader2 size={14} className="animate-spin" />} Create category
                                </button>
                            </form>
                        )}

                        {activeTab === 'goal' && (
                            <form onSubmit={handleGoalSubmit} className="space-y-3.5">
                                <h3 className="text-sm font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>New goal</h3>
                                <div>
                                    <label className={labelCls}>Title</label>
                                    <input type="text" value={goalForm.title} onChange={(e) => setGoalForm((p) => ({ ...p, title: e.target.value }))} className={inputCls} placeholder="e.g. Finish report" required />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className={labelCls}>Deep work (min)</label>
                                        <input type="number" min={1} value={goalForm.target_deep_work} onChange={(e) => setGoalForm((p) => ({ ...p, target_deep_work: Number(e.target.value) || 0 }))} className={inputCls} required />
                                    </div>
                                    <div>
                                        <label className={labelCls}>Distraction limit</label>
                                        <input type="number" min={0} value={goalForm.distraction_limit} onChange={(e) => setGoalForm((p) => ({ ...p, distraction_limit: Number(e.target.value) || 0 }))} className={inputCls} required />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelCls}>Date</label>
                                    <input type="date" value={goalForm.date} onChange={(e) => setGoalForm((p) => ({ ...p, date: e.target.value }))} className={inputCls} required />
                                </div>
                                <div>
                                    <label className={labelCls}>Priority tasks (comma-separated)</label>
                                    <input type="text" value={goalForm.priority_tasks} onChange={(e) => setGoalForm((p) => ({ ...p, priority_tasks: e.target.value }))} className={inputCls} placeholder="Task 1, Task 2" />
                                </div>
                                <div>
                                    <label className={labelCls}>Notes</label>
                                    <textarea value={goalForm.notes} onChange={(e) => setGoalForm((p) => ({ ...p, notes: e.target.value }))} className={inputCls} rows={2} placeholder="Optional" />
                                </div>
                                <button type="submit" className="btn-primary mt-2 flex items-center gap-2" disabled={loading}>
                                    {loading && <Loader2 size={14} className="animate-spin" />} Create goal
                                </button>
                            </form>
                        )}

                        {activeTab === 'contact' && (
                            <form onSubmit={handleContactSubmit} className="space-y-3.5">
                                <h3 className="text-sm font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Get in touch</h3>
                                <div>
                                    <label className={labelCls}>Name</label>
                                    <input type="text" value={contactForm.name} onChange={(e) => setContactForm((p) => ({ ...p, name: e.target.value }))} className={inputCls} placeholder="Your name" required />
                                </div>
                                <div>
                                    <label className={labelCls}>Email</label>
                                    <input type="email" value={contactForm.email} onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))} className={inputCls} placeholder="you@example.com" required />
                                </div>
                                <div>
                                    <label className={labelCls}>Message</label>
                                    <textarea value={contactForm.message} onChange={(e) => setContactForm((p) => ({ ...p, message: e.target.value }))} className={inputCls} rows={3} placeholder="How can we help?" />
                                </div>
                                <button type="submit" className="btn-primary mt-2 flex items-center gap-2" disabled={loading}>
                                    {loading && <Loader2 size={14} className="animate-spin" />} Send message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Side panel */}
                    <div className="lg:col-span-1">
                        <div className="card p-5 sticky top-20">
                            <h4 className="text-xs font-medium text-text-secondary mb-3 uppercase tracking-wider">Categories</h4>
                            {categories.length === 0 ? (
                                <p className="text-text-muted text-xs">No categories yet.</p>
                            ) : (
                                <ul className="space-y-1.5">
                                    {categories.map((c) => (
                                        <li key={c._id} className="text-xs text-text-secondary flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                                            {c.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
