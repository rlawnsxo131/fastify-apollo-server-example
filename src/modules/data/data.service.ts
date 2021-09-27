import { FindOneOptions } from 'typeorm';
import { Data } from '.';

export default class DataService {
  static async fincOne(key: FindOneOptions<Data>) {
    const user = await Data.findOne(key);
    return user;
  }
}
