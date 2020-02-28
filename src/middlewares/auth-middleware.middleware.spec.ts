import { AuthMiddleware } from './auth-middleware.service';

describe('AuthMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthMiddleware()).toBeDefined();
  });
});
