import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.VITE_FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": process.env.FIREBASE_CLIENT_CERT_URL
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.VITE_FIREBASE_PROJECT_ID}.firebaseio.com`
});

const db = admin.firestore();
const auth = admin.auth();

// Define indexes here
const createIndexes = async () => {
  try {
    // Example: Create a composite index on 'userId' and 'timestamp' in 'symptoms' collection
    await db.collection('symptoms').createIndex({
      fields: [
        { fieldPath: 'userId', order: 'ASCENDING' },
        { fieldPath: 'timestamp', order: 'DESCENDING' },
      ],
    });
    console.log('Composite index created on symptoms collection');

    // Example: Create a single-field index on 'userId' in 'symptoms' collection
    await db.collection('symptoms').createIndex({
      fields: [
        { fieldPath: 'userId', order: 'ASCENDING' },
      ],
    });
    console.log('Single-field index created on symptoms collection');

    // Add more indexes as needed
  } catch (error) {
    console.error('Error creating indexes:', error);
  }
};

createIndexes();

export { db, auth, admin };
