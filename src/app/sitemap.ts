export default async function Sitemap() {
    return [
        {
            url: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
            lastModified: new Date().toISOString().split('T')[0],
        },
    ];
}
