import { config } from 'dotenv';
import { resolve } from 'path';
import { environmentFilename } from '../constants';

export default function initializeEnvironment() {
  config({
    path: resolve(process.cwd(), environmentFilename),
  });
}
