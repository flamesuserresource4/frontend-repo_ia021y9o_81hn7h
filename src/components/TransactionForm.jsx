import React, { useState } from 'react';

const initial = { date: new Date().toISOString().slice(0, 10), type: 'expense', category: '', amount: '', note: '', method: 'cash' };

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountNum = parseFloat(form.amount);
    if (!form.category || !amountNum || amountNum <= 0) return;
    onAdd({ ...form, amount: amountNum, id: crypto.randomUUID() });
    setForm(initial);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-4 grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Date</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Type</label>
          <select name="type" value={form.type} onChange={handleChange} className="w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            <option value="credit">Credit</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Category</label>
          <input name="category" value={form.category} onChange={handleChange} placeholder="e.g. Food, Rent, Salary" className="w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Method</label>
          <select name="method" value={form.method} onChange={handleChange} className="w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500">
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="bank">Bank</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Amount</label>
          <input type="number" step="0.01" name="amount" value={form.amount} onChange={handleChange} placeholder="0.00" className="w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Note</label>
          <input name="note" value={form.note} onChange={handleChange} placeholder="optional" className="w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Add
        </button>
      </div>
    </form>
  );
}
