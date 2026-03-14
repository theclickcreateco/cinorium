import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Replace this with your actual production domain
  const baseUrl = 'https://cinorium.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
