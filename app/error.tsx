'use client';
export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div classname="p-4">
            <h2 classname="text-red-500 mb-2">Terjadi Kesalahan!</h2>
            <button
                onClick={() => reset()}
                classname="px-4 py-2 bg-blue-500 text-while rounded"
            >
                Coba lagi
            </button>
        </div>
    );
}