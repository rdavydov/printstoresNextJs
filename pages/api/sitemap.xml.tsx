import { SitemapStream, streamToPromise, EnumChangefreq } from "sitemap";
import { catalogService } from "src/api";
import { createGzip } from "zlib";

export default async (req, res) => {
  if (!res) return {};
  try {
    // Set response header
    res.setHeader("content-type", "application/xml");
    res.setHeader("Content-Encoding", "gzip");

    // A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
    // The readable stream it transforms must be in object mode.
    const smStream = new SitemapStream({
      hostname: `${process.env.BASE_URL}`.replace("/api", ""),
    });

    const pipeline = smStream.pipe(createGzip());
    // Add any static entries here
    smStream.write({ url: "/", lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.WEEKLY });
    smStream.write({ url: "/about", lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY });
    smStream.write({ url: "/contacts", lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY });
    smStream.write({ url: "/cart", lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY });
    smStream.write({ url: "/product", lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY });
    smStream.write({ url: "/reviews", lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY });
    smStream.write({ url: "/payment", lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY });
    // E.g. we create a sitemap.xml for articles
    // Set articles change frequencey is weekly
    const catalogPages = await catalogService.getAllProducts(req.query);
    catalogPages.products.map((product) => {
      smStream.write({
        url: `product/${product.product_id}`,
        changefreq: EnumChangefreq.WEEKLY,
      });
    });
    smStream.end();
    // cache the response
    // streamToPromise.then(sm => sitemap = sm)
    streamToPromise(pipeline);
    // stream the response
    pipeline.pipe(res).on("error", (e) => {
      throw e;
    });
  } catch (e) {
    res.status(500).end();
  }
};
