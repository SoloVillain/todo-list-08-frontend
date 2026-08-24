import React from 'react';

export default function TodoForm() {
  return (
    <div className="mb-6 bg-gray-50 p-4 rounded-md border border-gray-100">
      <form className="flex gap-2">
        <input
          type="text"
          placeholder="Tambahkan tugas baru..."
          className="flex-1 text-gray-800 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
        <button
          type="button"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          Tambah
        </button>
      </form>
    </div>
  );
}