export default function Robots() {
    return {
        host: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
        sitemap: `https://${process.env.NEXT_PUBLIC_DOMAIN}/sitemap.xml`,
        rules: {
            userAgent: '*',
        },
    };
}
