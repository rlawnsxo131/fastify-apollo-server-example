import Fastify from './Fastify';
import initializeEnvironment from '../lib/initializeEnvironment';
import Apollo from './Apollo';

export default class Server {
  private fastify: Fastify;
  private apollo: Apollo;

  constructor() {
    initializeEnvironment();
    this.fastify = new Fastify();
    this.apollo = new Apollo(this.fastify.getApp());
  }

  async setup() {
    await this.apollo.start();
    this.fastify.registerApollo(this.apollo.createHandler());
  }

  async start() {
    try {
      await this.fastify.start();
    } catch (e) {
      this.fastify.getApp().log.error(e);
      process.exit(1);
    }
  }

  getServer() {
    return {
      fasitfy: this.fastify,
      apollo: this.apollo,
    };
  }
}
