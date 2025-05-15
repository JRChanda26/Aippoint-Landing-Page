// module.exports = {
//     siteUrl: 'https://aippoint.ai', // ✅ Your actual domain
//     generateRobotsTxt: true,        // ✅ Also generate robots.txt
//     sitemapSize: 5000,              // Optional
//   }  
// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//     siteUrl: 'https://aippoint.ai',
//     generateRobotsTxt: true,
//     generateIndexSitemap: true,
//     sitemapSize: 5000,
//     sourceDir: 'src/app', // 👈 this is key!
//     outDir: './public',
//   };
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://aippoint.ai',
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    exportMap: async function () {
      return [
        { page: '/' },
        { page: '/contact' },
        { page: '/faq' },
        { page: '/feature' },
        { page: '/pricing' },
      ];
    }
  }
  
  