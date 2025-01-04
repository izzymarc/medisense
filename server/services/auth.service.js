import { User } from '../models/User.js';
    import jwt from 'jsonwebtoken';
    import { ValidationError, AuthenticationError } from '../utils/errors.js';

    export const authService = {
      validateRegistration: ({ name, email, password }) => {
        if (!name?.trim()) throw new ValidationError('Name is required');
        if (!email?.trim()) throw new ValidationError('Email is required');
        if (!password || password.length < 6) {
          throw new ValidationError('Password must be at least 6 characters');
        }
      },

      async checkExistingUser(email) {
        const user = await User.findOne({ email });
        if (user) throw new ValidationError('Email already registered');
      },

      async createUser({ name, email, password }) {
        const user = new User({ name, email, password });
        await user.save();
        return user;
      },

      generateToken(userId) {
        return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
      },

      async validateLogin({ email, password }) {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
          throw new AuthenticationError('Invalid credentials');
        }
        return user;
      }
    };
