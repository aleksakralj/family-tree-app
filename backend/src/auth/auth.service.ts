import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // In a real application you would use a proper user repository.
  private users = new Map<string, { passwordHash: string }>();

  constructor(private jwtService: JwtService) {}

  async register(username: string, password: string) {
    const passwordHash = await bcrypt.hash(password, 10);
    this.users.set(username, { passwordHash });
    return true;
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.get(username);
    if (!user) return null;
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (isMatch) {
      return { username };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
