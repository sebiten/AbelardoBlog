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
    <main className="mt-14 w-10/12 xl:w-9/12 flex items-center justify-center gap-4 mx-auto ">
      <div className="lg:flex block">
        <div className="mr-0 flex flex-col w-full prose-a:dark:text-white prose-strong:dark:text-white prose-strong:font-semibold prose-headings:dark:text-white mx-auto prose prose-headings:font-black prose-headings:text-3xl prose-headings:my-4 dark:text-white text-gray-800">
          <h1 className="text-3xl mt-4 mb-0 font-title ">{title}</h1>
          <p className="mt-0 ">{pubDate}</p>
          <p className="text-xl mt-4 mb-0">
            <span className="font-bold text-yellow-500">Categoría: </span>
            {categories}
          </p>
          <article className="w-full text-justify dark:text-white text-lg text-gray-800">
            <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <div className="flex flex-col">
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
          mb-0"
                href="/"
              >
                ← Volver al inicio
              </Link>
              <p className="animate-bounce animate-infinite animate-duration-[100ms] animate-delay-[14ms] animate-ease-out">
                <span className="font-bold text-3xl text-yellow-500 ">
                  ¡Gracias por leer!
                </span>
              </p>
            </div>
          </article>
        </div>
        <article className="w-12/12 lg:w-2/12 lg:absolute lg:right-0 mr-0 xl:right-12 mt-10 lg:ml-10 ">
          <aside className="mx-auto">
            <div className="flex flex-col mx-auto dark:text-white text-gray-800">
              <h3 className="text-2xl font-bold mb-4">Más articulos</h3>
              <ul className="list-none pl-4">
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
