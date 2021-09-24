import fastify, { FastifyInstance } from 'fastify';
import compress from 'fastify-compress';
import corsPlugin from 'fastify-cors';
import jwtPlugin from '../plugins/jwtPlugin';
import routes from '../routes';

export default class Fastify {
  private app: FastifyInstance;

  constructor() {
    this.app = fastify({ logger: true });
    this.app.register(corsPlugin, {
      origin: (origin, callback) => {
        if (!origin) {
          return callback(null, true);
        }
        const allowedHost = [/^http\:\/\/localhost/];
        const allowed = allowedHost.some((regex) => regex.test(origin));
        callback(null, allowed);
      },
      credentials: true,
    });
    this.app.register(compress);
    this.app.register(jwtPlugin);
    this.app.register(routes, { prefix: '/api' });
  }

  getApp() {
    return this.app;
  }

  start() {
    return this.app.listen(process.env.PORT!);
  }

  close() {
    return this.app.close();
  }

  registerApollo(apolloHandler: (fastify: FastifyInstance) => Promise<void>) {
    this.app.register(apolloHandler);
  }
}
