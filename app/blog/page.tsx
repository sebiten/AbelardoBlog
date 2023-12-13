import { getPostsMeta } from "@/lib/posts";
import BlogPosts from "../components/BlogPosts"
import Link from "next/link";

export default async function Posts() {
  const posts = await getPostsMeta();
  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }
  return (
    <section className="mt-6 mx-auto w-12/12">
      <h2 className="text-4xl font-bold text-white/90">Blog</h2>
      <ul className="w-full list-none p-0 grid grid-cols-2">
        {posts.map((post) => (
          <BlogPosts key={post.id} post={post} />
        ))}
      </ul>
      <p className="mb-10 text-center">
        <Link className="" href="/">← Volver al inicio</Link>🏠
      </p>
    </section>
  );
}
