      import axios, { AxiosError } from 'axios';
      import { auth as firebaseAuth } from '../firebase';
      import {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        updateProfile,
        User as FirebaseUser
      } from 'firebase/auth';
      import { collection, addDoc } from 'firebase/firestore';
      import { db } from '../firebase';
      import {
        User,
        Symptom,
        AuthResponse,
        ApiError,
        GeminiResponse,
        SymptomHistoryResponse,
        Pagination
      } from '../types';

      const api = axios.create({
        baseURL: 'http://44.206.253.140:5000/api/v1',
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

      const handleResponse = <T>(response: { data: T; status: number }): T => {
        if (response.status >= 200 && response.status < 300) {
          return response.data;
        }
        throw new Error(`Request failed with status ${response.status}`);
      };

      const handleError = (error: AxiosError): ApiError => {
        console.error('API Error:', error);
        throw {
          message: error.message,
          status: error.response?.status,
          details: error.response?.data
        };
      };

      export const auth = {
        login: async (email: string, password: string): Promise<AuthResponse> => {
          try {
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
            const user = userCredential.user;
            const token = await user.getIdToken();
            localStorage.setItem('token', token);
            const userData: User = {
              id: user.uid,
              name: user.displayName || 'User',
              email: user.email || '',
              profilePicture: user.photoURL || undefined
            };
            localStorage.setItem('user', JSON.stringify(userData));
            return { user: userData, token };
          } catch (error) {
            throw handleError(error as AxiosError);
          }
        },

        register: async (name: string, email: string, password: string): Promise<AuthResponse> => {
          try {
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: name });
            const token = await user.getIdToken();
            localStorage.setItem('token', token);
            const userData: User = {
              id: user.uid,
              name: user.displayName || 'User',
              email: user.email || '',
              profilePicture: user.photoURL || undefined
            };
            localStorage.setItem('user', JSON.stringify(userData));
            return { user: userData, token };
          } catch (error) {
            throw handleError(error as AxiosError);
          }
        },

        logout: (): void => {
          signOut(firebaseAuth);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      };

      export const gemini = {
        checkSymptoms: async (symptoms: Symptom[]): Promise<{ aiAdvice: string }> => {
          try {
            const user = firebaseAuth.currentUser;
            if (!user) {
              throw new Error('User not authenticated');
            }

            const response = await axios.post<GeminiResponse>(
              'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
              {
                contents: [{
                  parts: [{ 
                    text: `Analyze the following symptoms and provide a brief, informative response. If the symptoms suggest a serious condition, advise the user to seek professional medical care. Symptoms: ${symptoms.map(symptom => symptom.description).join(', ')}` 
                  }]
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
            const symptomCollection = collection(db, 'symptoms');
            await addDoc(symptomCollection, {
              userId: user.uid,
              symptoms,
              aiAdvice,
              timestamp: new Date()
            });

            return { aiAdvice };
          } catch (error) {
            throw handleError(error as AxiosError);
          }
        }
      };