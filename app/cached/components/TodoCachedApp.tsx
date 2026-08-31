'use client';

import React from 'react';
import TodoForm from '@/app/components/TodoForm';
import TodoList from '@/app/components/TodoList';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Todo } from '@/types/todo';

type TodoCachedAppProps = {
  initialTodos: Todo[];
};

export default function TodoCachedApp({ initialTodos }: TodoCachedAppProps) {
  // Caching State: Menggunakan custom hook useLocalStorage yang tersinkron otomatis
  const [todos, setTodos] = useLocalStorage<Todo[]>('TODO_LIST_CACHE', initialTodos);

  // 1. Handler Tambah Tugas
  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      description: 'Tugas baru yang tersimpan di localStorage.',
      completed: false,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  // 2. Handler Toggle Checklist
  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 3. Handler Hapus Tugas
  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // 4. Reset Cache ke Data Semula
  const handleResetToDefault = () => {
    if (confirm('Kembalikan data cache ke daftar tugas awal?')) {
      setTodos(initialTodos);
    }
  };

  return (
    <div>
      {/* Form Input Tambah Tugas (Shared Component dari app/components/TodoForm) */}
      <TodoForm onAddTodo={handleAddTodo} />

      {/* Indikator Status Caching & Reset */}
      <div className="flex items-center justify-between text-xs text-gray-500 mb-2 px-1">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Cache aktif (`localStorage: TODO_LIST_CACHE`)
        </span>
        <button
          type="button"
          onClick={handleResetToDefault}
          className="text-gray-500 hover:text-rose-600 underline transition cursor-pointer"
        >
          Reset ke Data Awal
        </button>
      </div>

      {/* List Tugas (Shared Component dari app/components/TodoList) */}
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}