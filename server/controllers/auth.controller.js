import { authService } from '../services/auth.service.js';

    export const authController = {
      register: async (req, res, next) => {
        try {
          const { name, email, password } = req.body;
          console.log('Server: Received registration request:', { name, email });
          
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
          console.log('Server: Registration successful, user:', { id: user._id, name, email });
        } catch (error) {
          console.error('Server: Registration failed:', error);
          next(error);
        }
      },

      login: async (req, res, next) => {
        try {
          const { email, password } = req.body;
          console.log('Server: Received login request:', { email });
          
          // Validate credentials
          const user = await authService.validateLogin({ email, password });
          
          // Generate token
          const token = authService.generateToken(user._id);
          
          res.json({ 
            token, 
            user: { id: user._id, name: user.name, email: user.email }
          });
          console.log('Server: Login successful, user:', { id: user._id, name: user.name, email: user.email });
        } catch (error) {
          console.error('Server: Login failed:', error);
          next(error);
        }
      }
    };
