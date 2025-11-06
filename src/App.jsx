import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import BudgetSummary from './components/BudgetSummary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import CreditTracker from './components/CreditTracker';

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = (tx) => {
    setItems((prev) => [tx, ...prev]);
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((t) => t.id !== id));
  };

  const totals = useMemo(() => {
    const income = items.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const expenses = items.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const credit = items.filter((t) => t.type === 'credit').reduce((s, t) => s + t.amount, 0);
    return { income, expenses, credit, balance: income - expenses - credit };
  }, [items]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-emerald-50 text-slate-900">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8 grid gap-6">
        <BudgetSummary totals={totals} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid gap-6">
            <TransactionForm onAdd={handleAdd} />
            <TransactionList items={items} onDelete={handleDelete} />
          </div>
          <div className="lg:col-span-1">
            <CreditTracker items={items} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
