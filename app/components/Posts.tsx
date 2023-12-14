import { getPostsMeta } from "@/lib/posts";
import BlogPosts from "./BlogPosts";
import Link from "next/link";

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <section className="mt-6 mx-auto">
      <h2 className="text-4xl text-center font-boldtext-white/90">Blog</h2>
      <ul className="w-full list-none p-0 grid grid-cols-1 md:grid-cols-2 ">
        {posts.slice(0, 8).map((post) => (
          <BlogPosts key={post.id} post={post} />
        ))}
      </ul>
      <div className="bg-gray-800 text-white my-2 rounded-lg text-center ">
        <Link
          className="p-4 bg-gray-800 border  border-gray-700 text-yellow-400 rounded-lg hover:bg-gray-600 flex items-center justify-center"
          href="/blog"
        >
         Ver Todos Los Artículos
        </Link>
      </div>
    </section>
  );
}
