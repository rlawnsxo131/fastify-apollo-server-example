import fastify, { FastifyInstance } from 'fastify';
import compress from 'fastify-compress';
import corsPlugin from 'fastify-cors';
import jwtPlugin from '../plugins/jwtPlugin';
import routes from '../routes';

export default class Fastify {
  private server: FastifyInstance;

  constructor() {
    this.server = fastify({ logger: true });
    this.server.register(corsPlugin, {
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
    this.server.register(compress);
    this.server.register(jwtPlugin);
    this.server.register(routes, { prefix: '/api' });
  }

  async start() {
    try {
      await this.server.listen(process.env.PORT!);
    } catch (e) {
      this.server.log.error(e);
      process.exit(1);
    }
  }

  getServer() {
    return this.server;
  }

  registerApollo(apolloHandler: (app: FastifyInstance) => Promise<void>) {
    this.server.register(apolloHandler);
  }
}
