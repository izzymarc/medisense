import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { auth } from '../middleware/auth.js';
import typeDefs from '../graphql/schema.js';
import resolvers from '../graphql/resolvers.js';

const createApolloServer = (httpServer) => {
  return new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
};

const applyApolloMiddleware = async (app, httpServer) => {
  const server = createApolloServer(httpServer);
  await server.start();

  app.use(
    '/graphql',
    auth,
    expressMiddleware(server, {
      context: async ({ req }) => ({ userId: req.userId }),
    }),
  );
};

export default applyApolloMiddleware;
