import React from 'react';
import TodoCachedApp from './components/TodoCachedApp';
import { getTodos } from '@/lib/todos';

export default async function CachedTodoPage() {
  // Mengambil data awal di Server Component
  const initialTodos = await getTodos();

  return (
    <main className="min-h-screen p-6 md:p-10 bg-white text-dark-70">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
          <header className="mb-6 border-b border-gray-100 pb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-dark-70 text-center">
              Daftar Tugas (Todo List)
            </h1>
          </header>

          {/* Halaman Caching: Menggunakan TodoCachedApp dari folder cached/components */}
          <TodoCachedApp initialTodos={initialTodos} />
        </div>
      </div>
    </main>
  );
}