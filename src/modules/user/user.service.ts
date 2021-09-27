import { User } from '.';
import { FindKey } from '../../@types';

export default class UserService {
  static async findOne(key: FindKey) {
    const user = await User.findOne(key);
    return user;
  }
}
