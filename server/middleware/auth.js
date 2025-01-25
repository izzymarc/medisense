import { getAuth } from 'firebase-admin/auth';
import { AuthenticationError } from '../utils/errors.js';

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) throw new AuthenticationError('No token provided');

    const decodedToken = await getAuth().verifyIdToken(token);
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email
    };
    next();
  } catch (error) {
    next(new AuthenticationError('Invalid token'));
  }
};