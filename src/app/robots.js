export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/'],
        },
        sitemap: [
            'https://kalingauniversity.ac.in/sitemap.xml',
        ],
    };
}
