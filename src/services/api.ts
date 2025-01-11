import axios from 'axios';
    import { auth as firebaseAuth } from '../firebase';
    import {
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      updateProfile,
      User
    } from 'firebase/auth';
    import { collection, doc, setDoc, getDoc, getDocs, query, where, deleteDoc, addDoc, orderBy, limit, startAfter } from 'firebase/firestore';
    import { db } from '../firebase';
    
    const api = axios.create({
      baseURL: '/',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    api.interceptors.request.use(config => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    
    const handleResponse = (response: any) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
      throw new Error(`Request failed with status ${response.status}`);
    };
    
    const handleError = (error: any) => {
      console.error('API Error:', error);
      throw error;
      };
    
    export const auth = {
      login: async (email: string, password: string) => {
        try {
          console.log('API: Attempting login with:', { email, password });
          const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
          const user = userCredential.user;
          const token = await user.getIdToken();
          localStorage.setItem('token', token);
          const userData = {
            id: user.uid,
            name: user.displayName || 'User',
            email: user.email || '',
            profilePicture: user.photoURL || undefined
          };
          localStorage.setItem('user', JSON.stringify(userData));
          console.log('API: Login successful, user:', userData);
          return { user: userData, token };
        } catch (error) {
          console.error('API: Login failed:', error);
          handleError(error);
        }
      },
    
      register: async (name: string, email: string, password: string) => {
        try {
          console.log('API: Attempting registration with:', { name, email, password });
          const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
          const user = userCredential.user;
          await updateProfile(user, { displayName: name });
          const token = await user.getIdToken();
          localStorage.setItem('token', token);
          const userData = {
            id: user.uid,
            name: user.displayName || 'User',
            email: user.email || '',
            profilePicture: user.photoURL || undefined
          };
          localStorage.setItem('user', JSON.stringify(userData));
          console.log('API: Registration successful, user:', userData);
          return { user: userData, token };
        } catch (error) {
          console.error('API: Registration failed:', error);
          handleError(error);
        }
      },
    
      logout: () => {
        signOut(firebaseAuth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        console.log('API: Logout successful');
      }
    };
    
    export const profile = {
      get: async () => {
        try {
          const user = firebaseAuth.currentUser;
          if (!user) {
            throw new Error('User not authenticated');
          }
          const userData = {
            id: user.uid,
            name: user.displayName || 'User',
            email: user.email || '',
            profilePicture: user.photoURL || undefined
          };
          return userData;
        } catch (error) {
          handleError(error);
        }
      },
    
      update: async (updates: {
        name?: string;
        email?: string;
        currentPassword?: string;
        newPassword?: string;
        profilePicture?: string;
      }) => {
        try {
          const user = firebaseAuth.currentUser;
          if (!user) {
            throw new Error('User not authenticated');
          }
          if (updates.name) {
            await updateProfile(user, { displayName: updates.name });
          }
          const userData = {
            id: user.uid,
            name: user.displayName || 'User',
            email: user.email || '',
            profilePicture: user.photoURL || undefined
          };
          localStorage.setItem('user', JSON.stringify(userData));
          return userData;
        } catch (error) {
          handleError(error);
        }
      }
    };
    
    export const gemini = {
      checkSymptoms: async (symptoms: { description: string, severity: string }[]) => {
        try {
          const user = firebaseAuth.currentUser;
          if (!user) {
            throw new Error('User not authenticated');
          }
          const symptomCollection = collection(db, 'symptoms');
          const response = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
            {
              contents: [{
                parts: [{ text: `Analyze the following symptoms and provide a brief, informative response. If the symptoms suggest a serious condition, advise the user to seek professional medical care. Symptoms: ${symptoms.map(symptom => symptom.description).join(', ')}` }]
              }]
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': import.meta.env.VITE_GEMINI_API_KEY
              }
            }
          );
          const aiAdvice = response.data.candidates[0].content.parts[0].text;
          console.log('Gemini API Response:', aiAdvice);
          const docRef = await addDoc(symptomCollection, {
            userId: user.uid,
            symptoms,
            aiAdvice,
            timestamp: new Date()
          });
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            return { aiAdvice };
          } else {
            throw new Error('Failed to save symptoms');
          }
        } catch (error) {
          handleError(error);
        }
      }
    };
