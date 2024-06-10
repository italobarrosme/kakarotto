import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/public/', '/_next/', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        crawlDelay: 10,
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
    ],
    sitemap: 'https://www.coqueirodigital.com.br/sitemap.xml',
  }
}
