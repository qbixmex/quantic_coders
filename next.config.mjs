import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      // Example
      // {
      //   protocol: 'https',
      //   hostname: 's3.amazonaws.com',
      //   port: '',
      //   pathname: '/my-bucket/**',
      // },
    ],
  },
};

export default withMDX()(nextConfig);

