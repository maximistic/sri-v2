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
    <div className="flex h-screen items-center justify-center bg-background text-foreground p-6">
      <div className="max-w-md w-full">
        <div className="bg-card border border-border p-6 rounded-lg shadow-lg font-mono">
          <p className="text-primary mb-4 text-sm">sri@portfolio:~$</p>
          <p className="typing text-foreground text-lg">
            404 — Command not found
          </p>
          <div className="mt-6 space-y-2">
            <p className="text-muted-foreground text-sm">
              Press <kbd className="bg-muted px-2 py-1 rounded border border-border text-xs">←</kbd> to go back home
            </p>
            <button
              onClick={() => router.push('/')}
              className="mt-2 inline-block text-sm text-foreground px-4 py-2 border border-border rounded hover:bg-muted transition"
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
          border-right: 2px solid var(--foreground);
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
            border-color: var(--foreground);
          }
        }
      `}</style>
    </div>
  );
}
