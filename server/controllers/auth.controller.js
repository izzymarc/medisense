import { authService } from '../services/auth.service.js';

export const authController = {
  register: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      
      // Validate input
      authService.validateRegistration({ name, email, password });
      
      // Check for existing user
      await authService.checkExistingUser(email);
      
      // Create user
      const user = await authService.createUser({ name, email, password });
      
      // Generate token
      const token = authService.generateToken(user._id);
      
      res.status(201).json({ 
        token, 
        user: { id: user._id, name, email }
      });
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      
      // Validate credentials
      const user = await authService.validateLogin({ email, password });
      
      // Generate token
      const token = authService.generateToken(user._id);
      
      res.json({ 
        token, 
        user: { id: user._id, name: user.name, email }
      });
    } catch (error) {
      next(error);
    }
  }
};