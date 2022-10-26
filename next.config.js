/** @type {import('next').NextConfig} */
module.exports = {
    // Uncomment for self-hosting via Docker
    // output: 'standalone',
    swcMinify: true,
    images: {
        domains: [
            'dummyimage.com',
            process.env.NEXT_PUBLIC_DOMAIN ?? 'example.com',
        ],
        formats: ['image/avif', 'image/webp'],
    },
    experimental: {
        newNextLinkBehavior: true,
        appDir: true,
    },
    reactStrictMode: true,
};
