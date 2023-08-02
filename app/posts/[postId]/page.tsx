import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml, categories } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-2xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <p className="text-3xl text-gray-500 dark:text-white/60 -mt-4">
        {categories}
      </p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <div className="flex flex-col">
          <p>
            <Link
              className="animate-pulse  
              animate-infinite
              animate-duration-[100ms]
              animate-delay-[22ms]
              animate-ease-out
              text-yellow-600
              hover:text-yellow-700
              dark:text-yellow-400
              dark:hover:text-yellow-500
              font-bold
              text-2xl
              mt-4
              mb-0

                "
              href="/"
            >
              ← Volver al inicio
            </Link>
          </p>
          <p className=" animate-bounce animate-infinite animate-duration-[100ms] animate-delay-[14ms] animate-ease-out">
            <span className="font-bold text-3xl text-yellow-500 ">
              ¡Gracias por leer!
            </span>
          </p>
        </div>
      </article>
    </main>
  );
}
