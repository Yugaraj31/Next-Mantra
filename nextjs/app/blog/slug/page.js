export const revalidate = 60;

import { fetchBlogBySlug } from "../../../lib/api";

export default async function BlogPage({ params }) {
  const blog = await fetchBlogBySlug(params.slug);

  if (!blog) return <p>Blog not found</p>;

  const { title, author, content, createdAt } = blog;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{title}</h1>
      <p>
        <em>By {author} on {new Date(createdAt).toLocaleDateString()}</em>
      </p>
      <div style={{ marginTop: "1rem" }}>{content}</div>
    </main>
  );
}
