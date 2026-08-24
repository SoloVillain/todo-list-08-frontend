import React from 'react';
import Link from 'next/link';
import RegisterForm from './components/RegisterForm';

export default function RegisterPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <header className="mb-6 border-b pb-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Register</h1>
          <p className="text-sm text-gray-500 mt-1">Buat akun baru</p>
        </header>

        {/* Form Komponen */}
        <RegisterForm />

        <div className="mt-6 border-t pt-4 text-center">
          <p className="text-sm text-gray-600">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-blue-600 hover:underline font-medium">
              Login di sini
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}