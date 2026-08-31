'use client';

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Todo } from '@/types/todo';

type TodoStateOnlyAppProps = {
  initialTodos: Todo[];
};

export default function TodoStateOnlyApp({ initialTodos }: TodoStateOnlyAppProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  // Handler Tambah Tugas Baru
  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      description: 'Tugas baru yang ditambahkan ke state komponen.',
      completed: false,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  // Handler Checklist / Toggle Status Completed
  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Handler Hapus Tugas
  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {/* Form Input */}
      <TodoForm onAddTodo={handleAddTodo} />

      {/* List Tugas */}
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}