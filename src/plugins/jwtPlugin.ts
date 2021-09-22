import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

const callback: FastifyPluginCallback = async (fastify, opts, done) => {
  done();
};

const jwtPlugin = fp(callback, {
  name: 'jwtPlugin',
});

export default jwtPlugin;
