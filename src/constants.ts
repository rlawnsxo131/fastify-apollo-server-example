export const isProduction = process.env.NODE_ENV === 'production';
export const environment = isProduction
  ? '.env.production'
  : '.env.development';
