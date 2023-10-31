/** @type {import('next').NextConfig} */
module.exports = {
    // Uncomment for self-hosting via Docker
    // output: 'standalone',
    swcMinify: true,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname: process.env.NEXT_PUBLIC_DOMAIN ?? 'example.com',
            },
            {
                hostname: 'dummyimage.com',
            },
        ],
        formats: ['image/avif', 'image/webp'],
    },
};
