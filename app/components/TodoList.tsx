'use client';

import TodoItem from './TodoItem';
import { Todo } from '@/types/todo';

type TodoListProps = {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
};

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Daftar Tugas</h2>
          <span className="text-xs bg-gray-70 text-gray-600 px-2.5 py-1 rounded-full font-medium">
            {todos.length} item
          </span>
        </div>
        <p className="text-sm text-muted text-center py-8">Belum ada tugas.</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Daftar Tugas</h2>
        <span className="text-xs bg-gray-70 text-gray-600 px-2.5 py-1 rounded-full font-medium">
          {todos.length} item
        </span>
      </div>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}