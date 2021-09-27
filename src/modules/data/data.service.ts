import { FindOneOptions } from 'typeorm';
import { Data } from '.';

export default class DataService {
  static async findOne(key: FindOneOptions<Data>) {
    const data = await Data.findOne(key);
    return data;
  }
}
