/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Basic redirect
      /* {
        source: '/',
        destination: '/home',
        permanent: true,
      }, */
    ]
  },
};

export default nextConfig;