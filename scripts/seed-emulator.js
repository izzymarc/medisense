import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBDUbJ7VSeUMwjTg1n8oT7GXiTZprhTjyE",
  authDomain: "medisense-a6fea.firebaseapp.com",
  projectId: "medisense-a6fea"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

// Test user credentials
const TEST_USER = {
  email: 'test@example.com',
  password: 'Test123!'
};

async function seedEmulator() {
  try {
    // Create test user
    await createUserWithEmailAndPassword(auth, TEST_USER.email, TEST_USER.password);
    console.log('Test user created successfully');
    console.log('Email:', TEST_USER.email);
    console.log('Password:', TEST_USER.password);
  } catch (error) {
    console.error('Error seeding emulator:', error);
  }
  process.exit(0);
}

seedEmulator();