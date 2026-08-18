type LogLevel = "debug" | "info" | "warn" | "error";

interface LogData {
  level: LogLevel;
  message: string;
  data?: Record<string, unknown>;
  timestamp: string;
  url?: string;
  userAgent?: string;
}

class Logger {
  private readonly isDevelopment = process.env.NODE_ENV === "development";
  private readonly isProduction = process.env.NODE_ENV === "production";

  private log(level: LogLevel, message: string, data?: Record<string, unknown>) {
    const logData: LogData = {
      level,
      message,
      data,
      timestamp: new Date().toISOString(),
      url: typeof window !== "undefined" ? window.location.href : undefined,
      userAgent: typeof window !== "undefined" ? navigator.userAgent : undefined,
    };

    if (this.isDevelopment) {
      const consoleFn = console[level] ?? console.log;
      consoleFn(`[${level.toUpperCase()}] ${message}`, data ?? "");
    }

    if (this.isProduction && (level === "error" || level === "warn")) {
      this.sendToService(logData);
    }
  }

  private async sendToService(logData: LogData) {
    try {
      await fetch("/api/logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logData),
      });
    } catch {
      // Silently fail — never break the app because logging failed
    }
  }

  debug(message: string, data?: Record<string, unknown>) {
    this.log("debug", message, data);
  }

  info(message: string, data?: Record<string, unknown>) {
    this.log("info", message, data);
  }

  warn(message: string, data?: Record<string, unknown>) {
    this.log("warn", message, data);
  }

  error(message: string, data?: Record<string, unknown>) {
    this.log("error", message, data);
  }
}

export const logger = new Logger();
