import notificationQueue from '../config/bullmq.js';

export const notificationService = {
  async sendNotification(userId, message) {
    await notificationQueue.add('send-notification', { userId, message });
  },
};
