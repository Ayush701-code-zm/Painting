"use client";

import { useEffect } from "react";
import { logErrorToService } from "@/lib/error-logger";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NODE_ENV === "production") {
        logErrorToService({
          message: error.message,
          stack: error.stack,
          digest: error.digest,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        });
      } else {
        console.error("Application error:", error);
      }
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-[4.5rem] md:px-[8vw]">
      <h2 className="font-['Inter'] text-[2rem] font-bold tracking-[-0.06em] mb-4">
        Something went wrong
      </h2>
      <p className="text-[rgba(255,255,255,0.6)] mb-8">
        We&apos;ve been notified and are working on it.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="px-[3.75rem] py-[1.125rem] rounded-2xl bg-[#FCC010] text-black font-['Inter'] font-bold tracking-[-0.04em] hover:opacity-90 transition-opacity"
      >
        Try again
      </button>

      {process.env.NODE_ENV === "development" && (
        <details className="mt-8 p-4 bg-[rgba(255,0,0,0.1)] rounded-2xl max-w-2xl w-full">
          <summary className="cursor-pointer text-[rgba(255,255,255,0.6)] text-sm">
            Error Details (dev only)
          </summary>
          <pre className="text-xs mt-2 text-[rgba(255,255,255,0.4)] overflow-auto">
            {error.stack}
          </pre>
        </details>
      )}
    </div>
  );
}
