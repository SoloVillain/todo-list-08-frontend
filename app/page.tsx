import { getTodos } from '@/lib/todos'; // sesuaikan dengan lib data awal kamu
import TodoStateOnlyApp from './components/TodoStateOnlyApp';

export default async function TodoPage() {
  const initialTodos = await getTodos();

  return (
    <main className="min-h-screen p-6 md:p-10 bg-white text-dark-70">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-70">
          <header className="mb-6 border-b border-gray-100 pb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-dark-70 text-center">
              Daftar Tugas (Todo List)
            </h1>
          </header>
          {/* Halaman Beranda: Menggunakan State Murni (In-Memory) */}
          <TodoStateOnlyApp initialTodos={initialTodos} />
        </div>
      </div>
    </main>
  );
}