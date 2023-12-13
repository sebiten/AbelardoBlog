import { getPostsMeta } from "@/lib/posts";
import BlogPosts from "./BlogPosts";
import Link from "next/link";

export default async function Posts() {
  const posts = await getPostsMeta();
  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }
  return (
    <section className="mt-6 mx-auto max-w-5xl">
      <h2 className="text-4xl text-center font-bold my-10 text-white/90">
        Artículos
      </h2>
      <ul className="w-full grid grid-cols-2 list-none p-0">
        {posts.slice(0, 6).map((post) => (
          <BlogPosts key={post.id} post={post} />
        ))}
      </ul>
      <Link
        className="flex items-center justify-center my-2 p-4 bg-gray-800 border  border-gray-700 text-yellow-400 rounded-lg hover:bg-gray-600"
        href="/blog"
      >
        Ver todos los Artículos
      </Link>
    </section>
  );
}
