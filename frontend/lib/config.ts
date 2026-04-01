// Centralised, type-safe configuration drawn from NEXT_PUBLIC_* env vars.
// Only NEXT_PUBLIC_* variables are available in the browser; everything else
// is undefined on the client and must NOT be referenced here.

export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  environment: (process.env.NEXT_PUBLIC_ENV as "development" | "staging" | "production") || "development",
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
  features: {
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
    enableDebugMode: process.env.NEXT_PUBLIC_DEBUG === "true",
    newDashboard: process.env.NEXT_PUBLIC_FEATURE_NEW_DASHBOARD === "true",
    betaFeatures: process.env.NEXT_PUBLIC_FEATURE_BETA === "true",
  },
} as const;
