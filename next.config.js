/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    RECAPTCHA_WEB_KEY: process.env.RECAPTCHA_WEB_KEY,
  },
};

module.exports = nextConfig;
