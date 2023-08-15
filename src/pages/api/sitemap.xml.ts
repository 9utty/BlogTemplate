import { getCategories, getPostsMeta } from "@/utils/posts";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  const URL = process.env.NEXT_PUBLIC_BLOG_URL;
  const categories = await getCategories();
  const posts = await getPostsMeta();

  if (categories === undefined || posts === undefined) {
    res.end();
    return;
  }

  let urls = `
    <url>
      <loc>${URL}</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${URL}/profile</loc>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
  `;

  for (const categoryId of categories) {
    const categoryPosts = posts.filter((post) =>
      post.id.startsWith(categoryId)
    );

    for (const post of categoryPosts) {
      const postId = post.id.replace(`${categoryId}/`, "");
      urls += `
        <url>
          <loc>${URL}/categories/${categoryId}/${postId}</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${urls}
    </urlset>
  `;

  res.end(xml);
}
