export const isProduction = process.env.NODE_ENV === 'production';
export const environmentFilename = isProduction
  ? '.env.production'
  : '.env.development';
