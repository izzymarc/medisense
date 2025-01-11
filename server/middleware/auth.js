import { auth as firebaseAuth } from '../../src/firebase';

    export const auth = async (req, res, next) => {
      try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) throw new Error();

        const decoded = await firebaseAuth.verifyIdToken(token);
        req.userId = decoded.uid;
        next();
      } catch (error) {
        res.status(401).json({ error: 'Please authenticate' });
      }
    };
