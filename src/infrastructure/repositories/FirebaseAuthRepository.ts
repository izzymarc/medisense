import { AuthRepository } from '../../domain/repositories/AuthRepository';
import { User } from '../../domain/models/User';
import { auth as firebaseAuth } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth';

export class FirebaseAuthRepository implements AuthRepository {
  async login(email: string, password: string): Promise<User> {
    const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
    return this.toDomainUser(userCredential.user);
  }

  async register(name: string, email: string, password: string): Promise<User> {
    const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    await updateProfile(userCredential.user, { displayName: name });
    return this.toDomainUser(userCredential.user);
  }

  logout(): void {
    signOut(firebaseAuth);
  }

  private toDomainUser(firebaseUser: any): User {
    return {
      id: firebaseUser.uid,
      name: firebaseUser.displayName || 'User',
      email: firebaseUser.email || '',
      profilePicture: firebaseUser.photoURL || undefined
    };
  }
}
