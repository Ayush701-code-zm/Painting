// ─── URL Safety ──────────────────────────────────────────────

// Prevent javascript: / data: URL injection from user-supplied links.
export function sanitizeUrl(url: string): string {
  if (url.startsWith("javascript:") || url.startsWith("data:")) {
    return "#";
  }
  return url;
}

// Validate a redirect URL so it only goes to the same origin.
export function safeRedirect(url: string, fallback = "/"): string {
  try {
    const parsed = new URL(url, typeof window !== "undefined" ? window.location.origin : "http://localhost");
    if (typeof window !== "undefined" && parsed.origin === window.location.origin) {
      return parsed.pathname + parsed.search + parsed.hash;
    }
    return fallback;
  } catch {
    return fallback;
  }
}

// ─── JSON Safety ─────────────────────────────────────────────

export function safeJsonParse<T>(jsonString: string, fallback: T): T {
  try {
    return JSON.parse(jsonString) as T;
  } catch {
    return fallback;
  }
}

// ─── Debounce ────────────────────────────────────────────────

export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// ─── Throttle ────────────────────────────────────────────────

export function throttle<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return function (...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// ─── Crypto ──────────────────────────────────────────────────

// Generate a cryptographically random hex token (client-side only).
export function generateToken(byteLength = 32): string {
  const array = new Uint8Array(byteLength);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");
}

// ─── Prototype Pollution Guard ────────────────────────────────

const FORBIDDEN_KEYS = new Set(["__proto__", "constructor", "prototype"]);

export function safeAssign(
  obj: Record<string, unknown>,
  key: string,
  value: unknown
): void {
  if (FORBIDDEN_KEYS.has(key)) {
    throw new Error(`Forbidden key: ${key}`);
  }
  obj[key] = value;
}
