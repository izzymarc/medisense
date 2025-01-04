import express from 'express';
    import { auth } from '../middleware/auth.js';
    import { User } from '../models/User.js';
    import bcrypt from 'bcryptjs';
    import multer from 'multer';
    import path from 'path';

    const router = express.Router();

    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'uploads/');
      },
      filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${Date.now()}${ext}`);
      }
    });

    const upload = multer({ storage });

    // Get user profile
    router.get('/', auth, async (req, res) => {
      try {
        const user = await User.findById(req.userId).select('-password');
        res.json({ id: user._id, name: user.name, email: user.email, profilePicture: user.profilePicture });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Update profile
    router.patch('/', auth, upload.single('profilePicture'), async (req, res) => {
      const updates = {};
      const { name, email, currentPassword, newPassword } = req.body;

      if (name) updates.name = name;
      if (email) updates.email = email;
      if (req.file) updates.profilePicture = `/uploads/${req.file.filename}`;

      try {
        const user = await User.findById(req.userId);

        if (currentPassword && newPassword) {
          const isMatch = await user.comparePassword(currentPassword);
          if (!isMatch) {
            return res.status(400).json({ error: 'Current password is incorrect' });
          }
          updates.password = await bcrypt.hash(newPassword, 10);
        }

        Object.assign(user, updates);
        await user.save();

        res.json({ user: { id: user._id, name: user.name, email: user.email, profilePicture: user.profilePicture } });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

    export default router;
