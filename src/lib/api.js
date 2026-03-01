const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function api(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const hasBody = options.body != null;
  const res = await fetch(url, {
    ...options,
    headers: {
      ...(hasBody ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || res.statusText || 'Request failed');
  return data;
}

export const eventsApi = {
  create: (body) => api('/api/events', { method: 'POST', body: JSON.stringify(body) }),
  getAll: (params) => api(`/api/events?${new URLSearchParams(params || {}).toString()}`),
};
export const categoriesApi = {
  create: (body) => api('/api/categories', { method: 'POST', body: JSON.stringify(body) }),
  getAll: () => api('/api/categories'),
};
export const goalsApi = {
  create: (body) => api('/api/goals', { method: 'POST', body: JSON.stringify(body) }),
  getAll: (params) => api(`/api/goals?${new URLSearchParams(params || {}).toString()}`),
};
export const leadsApi = {
  create: (body) => api('/api/leads', { method: 'POST', body: JSON.stringify(body) }),
};
