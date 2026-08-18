import { config } from "@/lib/config";

export const featureFlags = {
  newDashboard: config.features.newDashboard,
  betaFeatures: config.features.betaFeatures,
} as const;

type FlagKey = keyof typeof featureFlags;

// Optionally check if a feature is enabled for a specific user (e.g., beta testers).
export function useFeatureFlag(flag: FlagKey, userId?: string): boolean {
  const isEnabled = featureFlags[flag];

  if (userId && typeof window !== "undefined") {
    const enabledUsers = localStorage.getItem(`feature_${flag}_users`);
    if (enabledUsers?.includes(userId)) {
      return true;
    }
  }

  return isEnabled;
}
