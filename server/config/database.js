import mongoose from 'mongoose';

    export const connectDB = async () => {
      try {
        await mongoose.connect(process.env.MONGODB_URI, {
          serverSelectionTimeoutMS: 30000, // Timeout after 30 seconds
          socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
          retryWrites: true,
          w: 'majority'
        });
        
        console.log('MongoDB Connected');
        
        mongoose.connection.on('error', err => {
          console.error('MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
          console.log('MongoDB disconnected. Attempting to reconnect...');
          setTimeout(connectDB, 5000); // Try to reconnect after 5 seconds
        });

      } catch (error) {
        console.error('MongoDB connection error:', error);
        // Don't exit the process, try to reconnect
        setTimeout(connectDB, 5000);
      }
    };
