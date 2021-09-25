import { Database } from './db';
import Server from './server';

const server = new Server();
const database = new Database();

database.getConnection().then(async () => {
  await server.setup();
  await server.start();
});
