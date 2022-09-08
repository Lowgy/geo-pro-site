import { env } from './src/env/server.mjs';

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'flagcdn.com'],
  },
  env: {
    TWITCH_CLIENT_ID: '5i8k6tg6klstxshq2q2yktyh4d27xu',
    TWITCH_SECRET: 'g8wafxiobbca20z4h9v9qlq9shozdv',
  },
});
