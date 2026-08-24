import Link from 'next/dist/client/link';
import React from 'react';

export default function LoginForm() {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email / Username:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Masukkan email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Masukkan password"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
        />
      </div>

      <div className="pt-2">
        <Link
          href="/"
          className="block text-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
        >
          Login
        </Link>
      </div>
    </div>
  );
}