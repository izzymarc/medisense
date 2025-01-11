import { auth as firebaseAuth } from '../config/firebase.js';
    import { admin } from '../config/firebase.js';
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
          const userRecord = await admin.auth().createUser({
            email: email,
            password: password,
            displayName: name
          });
          return userRecord;
        } catch (error) {
          throw new ValidationError('Email already registered');
        }
      },

      generateToken(userId) {
        return userId;
      },

      async validateLogin({ email, password }) {
        try {
          const userRecord = await admin.auth().getUserByEmail(email);
          if (!userRecord) {
            throw new AuthenticationError('Invalid credentials');
          }
          await admin.auth().signInWithEmailAndPassword(email, password);
          return userRecord;
        } catch (error) {
          throw new AuthenticationError('Invalid credentials');
        }
      }
    };
