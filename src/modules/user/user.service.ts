import { FindOneOptions } from 'typeorm';
import { User } from '.';

export default class UserService {
  static async findOne(key: FindOneOptions<User>) {
    const user = await User.findOne(key);
    return user;
  }
}
