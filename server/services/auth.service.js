import { auth as firebaseAuth } from '../../src/firebase';
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
    import { ValidationError, AuthenticationError } from '../utils/errors.js';

    export const authService = {
      validateRegistration: ({ name, email, password }) => {
        if (!name?.trim()) throw new ValidationError('Name is required');
        if (!email?.trim()) throw new ValidationError('Email is required');
        if (!password || password.length < 6) {
          throw new ValidationError('Password must be at least 6 characters');
        }
      },

      async createUser({ name, email, password }) {
        try {
          const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
          const user = userCredential.user;
          await firebaseAuth.updateProfile(user, { displayName: name });
          return user;
        } catch (error) {
          throw new ValidationError('Email already registered');
        }
      },

      generateToken(userId) {
        return userId;
      },

      async validateLogin({ email, password }) {
        try {
          const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
          return userCredential.user;
        } catch (error) {
          throw new AuthenticationError('Invalid credentials');
        }
      }
    };
