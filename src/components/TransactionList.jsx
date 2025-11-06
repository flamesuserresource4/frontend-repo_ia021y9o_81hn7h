import React, { useMemo } from 'react';
import { Trash2 } from 'lucide-react';

export default function TransactionList({ items, onDelete }) {
  const grouped = useMemo(() => {
    const map = new Map();
    for (const t of items) {
      if (!map.has(t.date)) map.set(t.date, []);
      map.get(t.date).push(t);
    }
    return Array.from(map.entries()).sort((a, b) => (a[0] < b[0] ? 1 : -1));
  }, [items]);

  const currency = (n) => new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(n);

  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      {grouped.length === 0 && (
        <p className="p-6 text-slate-500">No transactions yet. Add your first one above.</p>
      )}
      {grouped.map(([date, list]) => (
        <div key={date} className="border-t first:border-t-0 border-slate-200">
          <div className="px-4 py-2 bg-slate-50 text-slate-600 text-sm font-medium">{new Date(date).toLocaleDateString()}</div>
          <ul>
            {list.map((t) => (
              <li key={t.id} className="px-4 py-3 flex items-center gap-3 border-t first:border-t-0 border-slate-100">
                <span className={`shrink-0 inline-flex px-2 py-1 rounded text-xs font-semibold ${t.type === 'income' ? 'bg-emerald-50 text-emerald-700' : t.type === 'expense' ? 'bg-rose-50 text-rose-700' : 'bg-indigo-50 text-indigo-700'}`}>{t.type}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 font-medium truncate">{t.category || 'Uncategorized'}</p>
                  <p className="text-slate-500 text-sm truncate">{t.note}</p>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${t.type === 'income' ? 'text-emerald-600' : t.type === 'expense' ? 'text-rose-600' : 'text-indigo-600'}`}>
                    {t.type === 'expense' ? '-' : '+'}{currency(t.amount)}
                  </p>
                  <p className="text-xs text-slate-500">{t.method}</p>
                </div>
                <button onClick={() => onDelete(t.id)} className="ml-2 p-2 rounded hover:bg-slate-100 text-slate-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
