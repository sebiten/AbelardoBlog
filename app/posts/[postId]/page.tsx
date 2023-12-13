import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaInstagram, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import AsidePosts from "@/app/components/AsidePosts";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("../../components/AsidePosts"), {
  ssr: false,
}); // importando el aside sin ssr

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
      title: "Artículo No Econtrado",
      description: "La pagina no ha sido encontrada",
    };
  }

  return {
    title: post.title,
    description: post.title,
    alternates: {
      canonical: `/posts/${postId}`,
      languages: {
        "es-ES": `es-ES/posts/${postId}`,
      },
    },
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml, categories } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="prose prose-xl  flex items-center justify-center gap-4 mx-auto ">
      <div className="block">
        <div className="mr-0 flex flex-col w-full prose-a:text-yellow-400 prose-strong:text-yellow-500 prose-strong:font-black prose-p:text-white prose-headings:text-white mx-auto prose max-w-5xl text-white">
          <hr className="h-px my-8  border-0 bg-gray-700" />

          <h1 className="text-3xl mt-4 mb-0 font-title  ">{title}</h1>
          <p className="mt-0 ">{pubDate}</p>
          <p className="text-xl mt-4 mb-0">
            <span className="font-bold text-yellow-500">Categoría: </span>
            {categories}
          </p>
          <article className="w-full dark:text-white text-[1.1rem] sm:text-lg text-gray-800">
            <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </article>
          <div className="mt-8 text-center text-3xl animate-bounce animate-infinite animate-duration-[100ms] animate-delay-[14ms] animate-ease-out">
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
              mb-0
                "
              href="/"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
        {/* <NoSSR posts={posts} /> */}
      </div>
    </main>
  );
}
