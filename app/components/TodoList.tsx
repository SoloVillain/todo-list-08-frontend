import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '@/types/todo';

export default function TodoList({ todos }: { todos: Todo[] }) {
  if (todos.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500 border-2 border-dashed border-gray-200 rounded-md">
        <p>Belum ada tugas. Yay!</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Tugas Anda</h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}