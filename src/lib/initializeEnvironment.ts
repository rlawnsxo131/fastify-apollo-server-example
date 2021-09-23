import { config } from 'dotenv';
import { resolve } from 'path';
import { isProduction } from '../constants';

const environment = isProduction ? '.env.production' : '.env.development';

export default function initializeEnvironment() {
  config({
    path: resolve(process.cwd(), environment),
  });
}
