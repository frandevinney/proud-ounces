const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'production';
const isProd = environment === PROD_ENV;

module.exports = {
  environment,
  isProd
};