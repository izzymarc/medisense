import { User } from '../../domain/models/User';
import { AuthRepository } from '../../domain/repositories/AuthRepository';

export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async login(email: string, password: string): Promise<User> {
    return this.authRepository.login(email, password);
  }

  async register(name: string, email: string, password: string): Promise<User> {
    return this.authRepository.register(name, email, password);
  }

  logout(): void {
    this.authRepository.logout();
  }
}
