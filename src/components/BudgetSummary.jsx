import React from 'react';

export default function BudgetSummary({ totals }) {
  const { income, expenses, credit, balance } = totals;
  const currency = (n) => new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(n);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-500">Income</p>
        <p className="mt-1 text-2xl font-semibold text-emerald-600">{currency(income)}</p>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-500">Expenses</p>
        <p className="mt-1 text-2xl font-semibold text-rose-600">{currency(expenses)}</p>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-500">Credit Used</p>
        <p className="mt-1 text-2xl font-semibold text-indigo-600">{currency(credit)}</p>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-500">Net Balance</p>
        <p className={`mt-1 text-2xl font-semibold ${balance >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{currency(balance)}</p>
      </div>
    </section>
  );
}
