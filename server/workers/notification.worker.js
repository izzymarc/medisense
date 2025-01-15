import { Worker } from 'bullmq';

const notificationWorker = new Worker('notification-queue', async (job) => {
  const { userId, message } = job.data;
  console.log(`Sending notification to user ${userId}: ${message}`);
  // Simulate sending a notification
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(`Notification sent to user ${userId}`);
}, {
  connection: {
    host: 'localhost',
    port: 6379,
  },
});

notificationWorker.on('completed', (job) => {
  console.log(`Job ${job.id} completed`);
});

notificationWorker.on('failed', (job, err) => {
  console.error(`Job ${job.id} failed with error:`, err);
});

export default notificationWorker;
