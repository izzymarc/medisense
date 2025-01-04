import axios from 'axios';
    import dotenv from 'dotenv';

    dotenv.config();

    const testSymptoms = async () => {
      const symptoms = [
        { description: 'Headache', severity: 'mild' },
        { description: 'Fatigue', severity: 'moderate' }
      ];

      try {
        const response = await axios.post(
          'http://localhost:5000/api/symptoms/check',
          { symptoms },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );

        console.log('API Response:', response.data);
      } catch (error) {
        console.error('API Error:', error.response ? error.response.data : error.message);
      }
    };

    testSymptoms();
