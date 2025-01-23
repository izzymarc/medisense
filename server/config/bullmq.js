import { Queue } from 'bullmq';

const notificationQueue = new Queue('notification-queue', {
  connection: {
    host: 'localhost',
    port: 6379,
  },
});

export default notificationQueue;
