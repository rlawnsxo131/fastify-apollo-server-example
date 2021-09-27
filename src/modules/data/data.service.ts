import { Data } from '.';
import { FindKey } from '../../@types';

export default class DataService {
  static async findOne(key: FindKey) {
    const data = await Data.findOne(key);
    return data;
  }
}
