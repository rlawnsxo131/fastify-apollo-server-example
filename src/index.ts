import Server from './server';
// import { Database } from './store';

// const database = new Database();
// database.getConnection().then(async () => {
//   const server = new Server();
//   await server.setup();
//   await server.start();
// });

const server = new Server();
(async () => {
  await server.setup();
  await server.start();
})();
