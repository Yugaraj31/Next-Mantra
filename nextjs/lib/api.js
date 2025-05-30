const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337/api";

export async function fetchBlogs() {
  const res = await fetch(`${STRAPI_URL}/blogs`);
  const data = await res.json();
  return data?.data || [];
}

export async function fetchBlogBySlug(slug) {
  const res = await fetch(`${STRAPI_URL}/blogs?filters[slug][$eq]=${slug}`);
  const data = await res.json();
  return data?.data?.[0]?.attributes ? { id: data.data[0].id, ...data.data[0].attributes } : null;
}
