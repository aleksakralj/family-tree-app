import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => Boolean)
  async register(
    @Args('username') username: string,
    @Args('password') password: string
  ) {
    return this.authService.register(username, password);
  }

  @Mutation(() => String)
  async login(@Args('input') input: LoginInput) {
    const user = await this.authService.validateUser(
      input.username,
      input.password
    );
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const token = await this.authService.login(user);
    return token.accessToken;
  }
}
