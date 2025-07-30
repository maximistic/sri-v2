'use client';

import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        router.push('/');
      }
    },
    [router]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-100 p-6">
      <div className="max-w-md w-full">
        <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-lg shadow-lg font-mono">
          <p className="text-green-400 mb-4 text-sm">sri@portfolio:~$</p>
          <p className="typing text-zinc-100 text-lg">
            404 — Command not found
          </p>
          <div className="mt-6 space-y-2">
            <p className="text-zinc-500 text-sm">
              Press <kbd className="bg-zinc-800 px-2 py-1 rounded border border-zinc-700 text-xs">←</kbd> to go back home
            </p>
            <button
              onClick={() => router.push('/')}
              className="mt-2 inline-block text-sm text-zinc-100 px-4 py-2 border border-zinc-700 rounded hover:bg-zinc-800 transition"
            >
              Go back home
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .typing {
          width: 0;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #e4e4e7;
          animation: typing 2s steps(30, end) forwards, blink 0.8s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          0%,
          100% {
            border-color: transparent;
          }
          50% {
            border-color: #e4e4e7;
          }
        }
      `}</style>
    </div>
  );
}
