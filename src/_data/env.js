console.log('ELEVENTY_ENV=production:::', process.env.ELEVENTY_ENV);

module.exports = {
  environment: process.env.ELEVENTY_ENV
};