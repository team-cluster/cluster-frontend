/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    RECAPTCHA_WEB_KEY: process.env.RECAPTCHA_WEB_KEY,
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
  },
};

module.exports = nextConfig;
