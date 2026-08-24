import { Todo } from '@/types/todo';

export const todos: Todo[] = [
  {
    id: 1,
    title: 'Belajar React Server Components (RSC)',
    description: 'Mempelajari konsep dasar Server Components pada Next.js dan perbedaannya dengan Client Components.',
    completed: true,
    createdAt: '2026-08-20',
  },
  {
    id: 2,
    title: 'Memahami Next.js App Router',
    description: 'Mempelajari struktur routing berbasis folder, dynamic route [id], layout, loading, dan error handling.',
    completed: true,
    createdAt: '2026-08-21',
  },
  {
    id: 3,
    title: 'Membuat Aplikasi Todo List',
    description: 'Praktik membuat CRUD Todo List sederhana menggunakan Next.js App Router.',
    completed: false,
    createdAt: '2026-08-22',
  },
  {
    id: 4,
    title: 'Eksplorasi Client Components',
    description: 'Menggunakan directive "use client" untuk interaktivitas seperti form input, onClick handler, dan state.',
    completed: false,
    createdAt: '2026-08-22',
  },
];

// Fungsi untuk mengambil semua data todos (halaman Home)
export async function getTodos(): Promise<Todo[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return todos;
}

// Fungsi untuk mengambil detail 1 todo berdasarkan ID (halaman Detail)
export async function getTodoDetail(id: string | number): Promise<Todo | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const todo = todos.find((item) => item.id === Number(id));
  return todo || null;
}