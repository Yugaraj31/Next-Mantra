import Link from "next/link";
import { fetchBlogs } from "../lib/api";

export default async function HomePage() {
  const blogs = await fetchBlogs();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog) => {
          const { id, title, slug, author, createdAt } = blog;
          return (
            <li key={id} style={{ marginBottom: "1rem" }}>
              <Link href={`/blog/${slug}`}>
                <strong>{title}</strong> by {author}
              </Link>
              <div style={{ fontSize: "0.85rem", color: "#666" }}>
                Published on {new Date(createdAt).toLocaleDateString()}
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
