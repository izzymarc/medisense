import { db } from '../config/firebase.js';

const migrateData = async () => {
  try {
    console.log('Starting data migration...');

    // Example: Add a new field to all documents in the 'symptoms' collection
    const symptomsCollection = db.collection('symptoms');
    const querySnapshot = await symptomsCollection.get();

    querySnapshot.forEach(async (doc) => {
      const docRef = symptomsCollection.doc(doc.id);
      await docRef.update({
        newField: 'default value',
      });
      console.log(`Updated document ${doc.id} in symptoms collection`);
    });

    console.log('Data migration completed successfully.');
  } catch (error) {
    console.error('Error during data migration:', error);
  }
};

export default migrateData;
