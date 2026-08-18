interface ErrorPayload {
  message: string;
  stack?: string;
  digest?: string;
  url: string;
  userAgent: string;
  timestamp: string;
}

// Send error details to the backend logging endpoint.
// Shows full error in development; sends only to service in production.
export function logErrorToService(error: ErrorPayload) {
  if (process.env.NODE_ENV === "development") {
    console.error("[ErrorLogger]", error);
    return;
  }

  fetch("/api/log-error", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(error),
  }).catch(() => {
    // Silently fail — never let logging break the app
  });
}
