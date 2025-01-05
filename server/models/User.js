import mongoose from 'mongoose';
    import bcrypt from 'bcryptjs';

    const userSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
      },
      password: {
        type: String,
        required: true
      },
      profilePicture: {
        type: String,
        default: null
      }
    }, { timestamps: true });

    // Hash password before saving
    userSchema.pre('save', async function(next) {
      if (!this.isModified('password')) return next();
      this.password = await bcrypt.hash(this.password, 10);
    });

    // Method to compare passwords
    userSchema.methods.comparePassword = async function(candidatePassword) {
      return bcrypt.compare(candidatePassword, this.password);
    };

    export const User = mongoose.model('User', userSchema);