const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://yourwebsite.com' });

  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/strategies', changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/contact', changefreq: 'weekly', priority: 0.7 });
  sitemap.write({ url: '/getstarted', changefreq: 'weekly', priority: 0.7 });
  sitemap.write({ url: '/stocks', changefreq: 'weekly', priority: 0.7 });
  sitemap.write({ url: '/stock-options', changefreq: 'weekly', priority: 0.7 });
  sitemap.write({ url: '/login', changefreq: 'weekly', priority: 0.7 });
  sitemap.write({ url: '/login', changefreq: 'weekly', priority: 0.7 });

  sitemap.end();

  const sitemapBuffer = await streamToPromise(sitemap);

  createWriteStream('./public/sitemap.xml').write(sitemapBuffer);
  console.log('Sitemap generated!');
})();
