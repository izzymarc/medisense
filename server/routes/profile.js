import express from 'express';
    import { auth } from '../middleware/auth.js';
    import { admin, db } from '../config/firebase.js';
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
        const user = await admin.auth().getUser(req.userId);
        if (!user) {
          return res.status(401).json({ error: 'User not authenticated' });
        }
        res.json({ id: user.uid, name: user.displayName, email: user.email, profilePicture: user.photoURL });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Update profile
    router.patch('/', auth, upload.single('profilePicture'), async (req, res) => {
      const updates = {};
      const { name, email, currentPassword, newPassword } = req.body;
      try {
        const user = await admin.auth().getUser(req.userId);
        if (!user) {
          return res.status(401).json({ error: 'User not authenticated' });
        }

        if (name) updates.displayName = name;
        if (req.file) updates.photoURL = `/uploads/${req.file.filename}`;

        if (currentPassword && newPassword) {
          // Firebase does not support password update with current password
          // This should be handled on the client side
          // For now, we will just update the profile
        }
        await admin.auth().updateUser(user.uid, updates);
        const updatedUser = await admin.auth().getUser(user.uid);
        res.json({ user: { id: updatedUser.uid, name: updatedUser.displayName, email: updatedUser.email, profilePicture: updatedUser.photoURL } });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

    export default router;
