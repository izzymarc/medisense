import { useState, useEffect } from 'react';

interface FeatureFlags {
  enableSymptomHistory: boolean;
  enableGraphQL: boolean;
  enableNotifications: boolean;
  enableNewUI: boolean;
}

const defaultFeatureFlags: FeatureFlags = {
  enableSymptomHistory: true,
  enableGraphQL: true,
  enableNotifications: true,
  enableNewUI: false,
};

export function useFeatureFlag(featureKey: keyof FeatureFlags) {
  const [isEnabled, setIsEnabled] = useState(defaultFeatureFlags[featureKey]);

  useEffect(() => {
    // In a real app, you would fetch feature flags from an API or a config file
    // For this example, we'll use the default flags
    setIsEnabled(defaultFeatureFlags[featureKey]);
  }, [featureKey]);

  return isEnabled;
}
