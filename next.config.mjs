/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            //port: '',
            //pathname: '/account123/**',
            //search: '',
          },
        ],
      },
};

export default nextConfig;
