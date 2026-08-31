'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Todo } from '@/types/todo';

export type { Todo };

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete?: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li
      className={`p-4 rounded-xl border flex items-center justify-between gap-3
        transition-all duration-200 ${todo.completed
          ? 'bg-success-10/20 border-success-20'
          : 'bg-white border-gray-100 hover:border-primary-70/40'
        }`}
    >
      {/* Bagian Checklist & Judul Tugas */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <input
          id={`todo-${todo.id}`}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 rounded text-primary-70 focus:ring-primary-70
            cursor-pointer accent-primary-70"
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`text-base font-medium truncate cursor-pointer transition-all
            ${todo.completed ? 'line-through text-gray-80' : 'text-dark-70'}`}
        >
          {todo.title}
        </label>
      </div>

      {/* Aksi: Detail & Hapus */}
      <div className="flex items-center gap-2 shrink-0">
        <Link
          href={`/task/${todo.id}`}
          className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-primary-10
            text-primary-90 hover:bg-primary-20 transition-colors"
        >
          Detail →
        </Link>

        {onDelete && (
          <Button
            type="button"
            onClick={() => onDelete(todo.id)}
            title="Hapus tugas"
            variant="destructive"
            size="xs"
            className="text-xs font-medium"
          >
            Hapus
          </Button>
        )}
      </div>
    </li>
  );
}