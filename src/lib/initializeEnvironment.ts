import { config } from 'dotenv';
import { resolve } from 'path';

const { NODE_ENV } = process.env;

export default function initializeEnvironment() {
  config({
    path: resolve(process.cwd(), `.env.${NODE_ENV}`),
  });
}
