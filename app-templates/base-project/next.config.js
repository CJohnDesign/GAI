/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['baseapp-nextjs-core'])

module.exports = withTM({
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
})
