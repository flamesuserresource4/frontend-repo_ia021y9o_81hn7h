import React from 'react';
import { Wallet } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
        <div className="p-2 rounded-lg bg-indigo-600 text-white shadow-sm">
          <Wallet className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Daily Budget</h1>
          <p className="text-sm text-slate-500">Track expenses, income, and credit usage</p>
        </div>
      </div>
    </header>
  );
}
