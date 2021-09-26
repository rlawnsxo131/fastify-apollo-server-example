import {
  ConnectionManager,
  getConnectionManager,
  Connection,
  ConnectionOptions,
  createConnection,
} from 'typeorm';
import { isProduction } from '../constants';
import { userEntity } from '../modules/user';

export default class Database {
  private connectionManager: ConnectionManager;
  private connectionOptions: ConnectionOptions;

  constructor() {
    this.connectionManager = getConnectionManager();
    this.connectionOptions = {
      name: 'default',
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      charset: 'utf8mb4_unicode_ci',
      connectTimeout: 10000,
      logging: isProduction ? ['error'] : ['query'],
      timezone: 'Z',
      extra: {
        connectionLimit: 10,
      },
      synchronize: false,
      entities: [userEntity],
    };
  }

  async connect() {
    return createConnection(this.connectionOptions);
  }

  async getConnection(): Promise<Connection> {
    const CONNECTION_NAME = 'default';
    if (this.connectionManager.has(CONNECTION_NAME)) {
      const connection = this.connectionManager.get(CONNECTION_NAME);
      try {
        if (connection.isConnected) {
          await connection.close();
        }
      } catch (e) {}
      return connection.connect();
    }

    return this.connect();
  }
}
