import React from 'react';

export default function CreditTracker({ items }) {
  const creditItems = items.filter((t) => t.type === 'credit');
  const totalCredit = creditItems.reduce((sum, t) => sum + t.amount, 0);

  if (creditItems.length === 0) {
    return (
      <section className="rounded-xl border border-slate-200 bg-white p-4">
        <h3 className="text-sm font-semibold text-slate-800 mb-2">Credit Overview</h3>
        <p className="text-slate-500">No credit usage recorded yet.</p>
      </section>
    );
  }

  const currency = (n) => new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(n);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-800">Credit Overview</h3>
        <div className="text-sm text-slate-600">Total Used: <span className="font-semibold text-indigo-600">{currency(totalCredit)}</span></div>
      </div>
      <ul className="divide-y divide-slate-100">
        {creditItems.map((t) => (
          <li key={t.id} className="py-2 flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-900">{t.category || 'Credit'}</p>
              <p className="text-xs text-slate-500">{new Date(t.date).toLocaleDateString()}</p>
            </div>
            <p className="font-semibold text-indigo-600">{currency(t.amount)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
