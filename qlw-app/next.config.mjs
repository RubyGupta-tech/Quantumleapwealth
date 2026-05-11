/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/resources/calculators.html',
        destination: '/resources/resources',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
