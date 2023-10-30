import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaInstagram, FaInstagramSquare, FaTiktok } from "react-icons/fa";

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
    <main className="mt-2 w-10/12 xl:w-6/12  flex items-center justify-center gap-4 mx-auto ">
      <div className="lg:flex block">
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

            <div className="flex flex-col mb-10 items-start">
              <Link
                className="animate-pulse  
          animate-infinite
          animate-duration-[100ms]
          animate-delay-[22ms]
          animate-ease-out
          text-yellow-600
          hover:text-yellow-700
          dark:text-yellow-500
          dark:hover:text-yellow-500
          font-bold
          text-2xl
          my-4
          mb-0"
                href="/"
              >
                ← Volver al inicio
              </Link>
              <p className="font-bold">
                Seguinos en nuestras redes para estar al tanto!😺
              </p>
              <div className="flex gap-4 items-center justify-center">
                <Link
                  href="https://www.instagram.com/abelardo.blog/"
                  target="_blank"
                  className="block text-2xl  hover:text-blue-500 underline transform transition-colors duration-300"
                >
                  <FaInstagram
                    size={40}
                    className="text-xl hover:text-yellow-500"
                  />
                </Link>
                <Link
                  href="https://www.tiktok.com/@abelardoblog"
                  target="_blank"
                  className="block text-2xl  hover:text-blue-500 underline transform transition-colors duration-300"
                >
                  <FaTiktok
                    size={40}
                    className="text-xl hover:text-yellow-500"
                  />
                </Link>
              </div>
            </div>
          </article>
        </div>
        <article className="w-12/12 lg:w-2/12 lg:absolute lg:right-0 mr-0 xl:right-12 mt-10 lg:ml-10 hidden xl:block ">
          <aside className="mx-auto">
            <div className="flex flex-col mx-auto dark:text-white text-gray-800">
              <h3 className="text-2xl font-bold mb-4 pl-2">Más articulos</h3>
              <ul className="list-disc pl-2">
                {/* Loop through related articles and display them */}
                {posts.map((relatedPost) => (
                  <li key={relatedPost.id} className="mb-2">
                    <Link href={`/posts/${relatedPost.id}`}>
                      <p className="text-blue-500 hover:underline">
                        {relatedPost.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </article>
      </div>
    </main>
  );
}
