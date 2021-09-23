import { config } from 'dotenv';
import { resolve } from 'path';
import { environment } from '../constants';

export default function initializeEnvironment() {
  config({
    path: resolve(process.cwd(), environment),
  });
}
