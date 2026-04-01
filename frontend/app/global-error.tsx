"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-[#f2f0f5] flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-[2rem] font-bold mb-4">Something went wrong</h2>
        <p className="text-[rgba(255,255,255,0.6)] mb-8">
          A critical error occurred. Please try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="px-[3.75rem] py-[1.125rem] rounded-2xl bg-[#FCC010] text-black font-bold"
        >
          Try again
        </button>

        {process.env.NODE_ENV === "development" && (
          <pre className="mt-8 text-xs text-[rgba(255,255,255,0.4)] max-w-xl overflow-auto">
            {error.message}
          </pre>
        )}
      </body>
    </html>
  );
}
