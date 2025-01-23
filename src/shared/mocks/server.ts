import { setupServer } from 'msw/node';
import { rest } from 'msw';

const handlers = [
  rest.post('/api/auth/login', (req, res, ctx) => {
    return res(
      ctx.json({
        user: {
          id: '1',
          name: 'Test User',
          email: 'test@example.com'
        },
        token: 'mock-token'
      })
    );
  }),
  rest.post('/api/symptoms/check', (req, res, ctx) => {
    return res(
      ctx.json({
        aiAdvice: 'Mock AI advice'
      })
    );
  })
];

export const server = setupServer(...handlers);
