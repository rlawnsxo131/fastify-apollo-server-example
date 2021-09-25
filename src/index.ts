import { Database } from './db';
import initializeEnvironment from './lib/initializeEnvironment';
import Server from './server';

initializeEnvironment();
const server = new Server();
const database = new Database();

database.getConnection().then(async () => {
  await server.setup();
  await server.start();
});
