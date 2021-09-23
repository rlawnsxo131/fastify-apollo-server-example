import { ApolloServer } from 'apollo-server-fastify';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';
import { FastifyInstance } from 'fastify';
import schema from '../graphql/schema';
import { isProduction } from '../constants';

export default class Apollo {
  private app: ApolloServer;

  constructor(fastify: FastifyInstance) {
    this.app = new ApolloServer({
      schema,
      context:
        ({ request }) =>
        () => {
          console.log('url: ', request.url);
          console.log('method: ', request.method);
        },
      plugins: [
        this.fastifyAppClosePlugin(fastify),
        ApolloServerPluginDrainHttpServer({ httpServer: fastify.server }),
        isProduction
          ? ApolloServerPluginLandingPageDisabled()
          : ApolloServerPluginLandingPageGraphQLPlayground(),
      ],
    });
  }

  private fastifyAppClosePlugin(fasitify: FastifyInstance) {
    return {
      async serverWillStart() {
        return {
          async drainServer() {
            await fasitify.close();
          },
        };
      },
    };
  }

  start() {
    return this.app.start();
  }

  getServer() {
    return this.app;
  }

  createHandler() {
    return this.app.createHandler();
  }
}
