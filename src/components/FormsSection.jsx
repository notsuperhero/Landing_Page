import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FolderOpen, Target, Mail, Loader2, Check, AlertCircle } from 'lucide-react';
import { eventsApi, categoriesApi, goalsApi, leadsApi } from '../lib/api';

const formTabs = [
  { id: 'event', label: 'Calendar Event', icon: Calendar },
  { id: 'category', label: 'Categories', icon: FolderOpen },
  { id: 'goal', label: 'Goal', icon: Target },
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

  // —— Calendar Event form state ——
  const [eventForm, setEventForm] = useState({
    title: '',
    category_id: '',
    start_time: '',
    end_time: '',
    priority: 3,
    is_recurring: false,
    label_color: '#7dd4a3',
    user_id: 'landing-user',
  });

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await eventsApi.create({
        ...eventForm,
        category_id: eventForm.category_id || undefined,
        end_time: eventForm.end_time || undefined,
        label_color: eventForm.label_color || undefined,
      });
      setEventForm({ title: '', category_id: '', start_time: '', end_time: '', priority: 3, is_recurring: false, label_color: '#7dd4a3', user_id: 'landing-user' });
      showMsg('success', 'Event created successfully.');
    } catch (err) {
      showMsg('error', err.message || 'Failed to create event.');
    } finally {
      setLoading(false);
    }
  };

  // —— Category form state ——
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
    } catch (err) {
      showMsg('error', err.message || 'Failed to create category.');
    } finally {
      setLoading(false);
    }
  };

  // —— Goal form state ——
  const [goalForm, setGoalForm] = useState({
    title: '',
    target_deep_work: 60,
    distraction_limit: 5,
    priority_tasks: '',
    notes: '',
    date: new Date().toISOString().slice(0, 10),
    user_id: 'landing-user',
  });

  const handleGoalSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await goalsApi.create({
        ...goalForm,
        priority_tasks: goalForm.priority_tasks ? goalForm.priority_tasks.split(',').map((s) => s.trim()).filter(Boolean) : [],
      });
      setGoalForm({ title: '', target_deep_work: 60, distraction_limit: 5, priority_tasks: '', notes: '', date: new Date().toISOString().slice(0, 10), user_id: 'landing-user' });
      showMsg('success', 'Goal created.');
    } catch (err) {
      showMsg('error', err.message || 'Failed to create goal.');
    } finally {
      setLoading(false);
    }
  };

  // —— Contact form state ——
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await leadsApi.create(contactForm);
      setContactForm({ name: '', email: '', message: '' });
      showMsg('success', 'Thanks! We’ll be in touch.');
    } catch (err) {
      showMsg('error', err.message || 'Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-dark-bg/80 border border-dark-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent/50 transition-colors';
  const labelClass = 'block text-xs font-medium text-text-secondary mb-1.5';

  return (
    <section id="forms" className="relative py-20 md:py-24 px-6">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4 font-medium">Forms</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-[family-name:var(--font-family-heading)] mb-5 leading-tight">
            Calendar, categories & goals
            <br />
            <span className="text-text-secondary">in one place</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-xl leading-relaxed">
            Create events, manage categories, set goals, or get in touch. All forms post to the FocusBoard API.
          </p>
        </motion.div>

        {message.text && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 flex items-center gap-2 px-3 py-2.5 rounded-lg border text-xs md:text-sm ${
              message.type === 'success'
                ? 'bg-accent/5 border-accent/25 text-accent'
                : 'bg-red-500/5 border-red-500/25 text-red-400'
            }`}
          >
            {message.type === 'success' ? <Check size={16} /> : <AlertCircle size={16} />}
            <span>{message.text}</span>
          </motion.div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {formTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-accent/15 border border-accent/40 text-accent'
                  : 'bg-white/[0.02] border border-dark-border text-text-secondary hover:text-text-primary hover:border-white/10'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form card */}
          <motion.div
            layout
            className="lg:col-span-2 card-dark p-6 md:p-8"
          >
            {activeTab === 'event' && (
              <form onSubmit={handleEventSubmit} className="space-y-4">
                <h3 className="text-lg font-medium text-text-primary mb-6">New calendar event</h3>
                <div>
                  <label className={labelClass}>Title *</label>
                  <input
                    type="text"
                    value={eventForm.title}
                    onChange={(e) => setEventForm((p) => ({ ...p, title: e.target.value }))}
                    className={inputClass}
                    placeholder="e.g. Study block"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Category</label>
                  <select
                    value={eventForm.category_id}
                    onChange={(e) => setEventForm((p) => ({ ...p, category_id: e.target.value }))}
                    className={inputClass}
                  >
                    <option value="">— None —</option>
                    {categories.map((c) => (
                      <option key={c._id} value={c._id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Start time *</label>
                    <input
                      type="datetime-local"
                      value={eventForm.start_time}
                      onChange={(e) => setEventForm((p) => ({ ...p, start_time: e.target.value }))}
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>End time</label>
                    <input
                      type="datetime-local"
                      value={eventForm.end_time}
                      onChange={(e) => setEventForm((p) => ({ ...p, end_time: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <div>
                    <label className={labelClass}>Priority (1–3)</label>
                    <select
                      value={eventForm.priority}
                      onChange={(e) => setEventForm((p) => ({ ...p, priority: Number(e.target.value) }))}
                      className={inputClass}
                    >
                      <option value={1}>1 – High</option>
                      <option value={2}>2 – Medium</option>
                      <option value={3}>3 – Low</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2 pt-6">
                    <input
                      type="checkbox"
                      id="recurring"
                      checked={eventForm.is_recurring}
                      onChange={(e) => setEventForm((p) => ({ ...p, is_recurring: e.target.checked }))}
                      className="rounded border-dark-border bg-dark-bg text-accent focus:ring-accent"
                    />
                    <label htmlFor="recurring" className="text-sm text-text-secondary">Recurring</label>
                  </div>
                  <div>
                    <label className={labelClass}>Label color</label>
                    <input
                      type="color"
                      value={eventForm.label_color}
                      onChange={(e) => setEventForm((p) => ({ ...p, label_color: e.target.value }))}
                      className="h-10 w-20 rounded-lg border border-dark-border cursor-pointer"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary mt-4 flex items-center gap-2" disabled={loading}>
                  {loading && <Loader2 size={18} className="animate-spin" />}
                  Create event
                </button>
              </form>
            )}

            {activeTab === 'category' && (
              <form onSubmit={handleCategorySubmit} className="space-y-4">
                <h3 className="text-lg font-medium text-text-primary mb-6">New category</h3>
                <div>
                  <label className={labelClass}>Name *</label>
                  <input
                    type="text"
                    value={categoryForm.name}
                    onChange={(e) => setCategoryForm((p) => ({ ...p, name: e.target.value }))}
                    className={inputClass}
                    placeholder="e.g. Deep work"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Description</label>
                  <textarea
                    value={categoryForm.description}
                    onChange={(e) => setCategoryForm((p) => ({ ...p, description: e.target.value }))}
                    className={inputClass}
                    rows={2}
                    placeholder="Optional description"
                  />
                </div>
                <button type="submit" className="btn-primary mt-4 flex items-center gap-2" disabled={loading}>
                  {loading && <Loader2 size={18} className="animate-spin" />}
                  Create category
                </button>
              </form>
            )}

            {activeTab === 'goal' && (
              <form onSubmit={handleGoalSubmit} className="space-y-4">
                <h3 className="text-lg font-medium text-text-primary mb-6">New goal</h3>
                <div>
                  <label className={labelClass}>Title *</label>
                  <input
                    type="text"
                    value={goalForm.title}
                    onChange={(e) => setGoalForm((p) => ({ ...p, title: e.target.value }))}
                    className={inputClass}
                    placeholder="e.g. Finish project report"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Target deep work (min) *</label>
                    <input
                      type="number"
                      min={1}
                      value={goalForm.target_deep_work}
                      onChange={(e) => setGoalForm((p) => ({ ...p, target_deep_work: Number(e.target.value) || 0 }))}
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Distraction limit *</label>
                    <input
                      type="number"
                      min={0}
                      value={goalForm.distraction_limit}
                      onChange={(e) => setGoalForm((p) => ({ ...p, distraction_limit: Number(e.target.value) || 0 }))}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Date *</label>
                  <input
                    type="date"
                    value={goalForm.date}
                    onChange={(e) => setGoalForm((p) => ({ ...p, date: e.target.value }))}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Priority tasks (comma-separated)</label>
                  <input
                    type="text"
                    value={goalForm.priority_tasks}
                    onChange={(e) => setGoalForm((p) => ({ ...p, priority_tasks: e.target.value }))}
                    className={inputClass}
                    placeholder="Task 1, Task 2"
                  />
                </div>
                <div>
                  <label className={labelClass}>Notes</label>
                  <textarea
                    value={goalForm.notes}
                    onChange={(e) => setGoalForm((p) => ({ ...p, notes: e.target.value }))}
                    className={inputClass}
                    rows={2}
                    placeholder="Optional notes"
                  />
                </div>
                <button type="submit" className="btn-primary mt-4 flex items-center gap-2" disabled={loading}>
                  {loading && <Loader2 size={18} className="animate-spin" />}
                  Create goal
                </button>
              </form>
            )}

            {activeTab === 'contact' && (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <h3 className="text-lg font-medium text-text-primary mb-6">Get in touch</h3>
                <div>
                  <label className={labelClass}>Name *</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm((p) => ({ ...p, name: e.target.value }))}
                    className={inputClass}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Email *</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))}
                    className={inputClass}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm((p) => ({ ...p, message: e.target.value }))}
                    className={inputClass}
                    rows={4}
                    placeholder="How can we help?"
                  />
                </div>
                <button type="submit" className="btn-primary mt-4 flex items-center gap-2" disabled={loading}>
                  {loading && <Loader2 size={18} className="animate-spin" />}
                  Send message
                </button>
              </form>
            )}
          </motion.div>

          {/* Side panel: categories list when on category tab */}
          <div className="lg:col-span-1">
            <div className="card-dark p-6 sticky top-24">
              <h4 className="text-sm font-medium text-text-primary mb-4">Categories</h4>
              {categories.length === 0 ? (
                <p className="text-text-muted text-sm">Create a category in the form to see it here.</p>
              ) : (
                <ul className="space-y-2">
                  {categories.map((c) => (
                    <li key={c._id} className="text-sm text-text-secondary flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent/60" />
                      {c.name}
                      {c.description && <span className="text-text-muted truncate">— {c.description}</span>}
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
