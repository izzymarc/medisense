import featureFlags from '../config/featureFlags.js';

export const featureFlag = (featureKey) => (req, res, next) => {
  if (featureFlags[featureKey]) {
    next();
  } else {
    res.status(404).json({ message: `Feature "${featureKey}" is disabled` });
  }
};
