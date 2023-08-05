import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";
import Link from "next/link";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-12">
        <h2 className="animate-bounce animate-infinite animate-duration-[100ms] animate-delay-[14ms] animate-ease-out text-2xl font-bold text-center text-yellow-500 dark:text-yellow-400">
          Artículos
        </h2>
        <div className="w-10/12 md:w-full xl:w-11/12 2xl:w-7/12 3xl:w-7/12">
          <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
            Si deseas escribir un artículo para este blog sobre algún tema,
            estaría encantado de leerlo y publicarlo. Puedes contactarme por mi
            cuenta de {""}
            <Link
              href="https://www.instagram.com/abelardo.blog/"
              target="_blank"
              className="text-yellow-500 dark:text-yellow-400 underline"
            >
              Instagram. {""}
            </Link>
            O si lo prefieres, puedes enviarme un mensaje a {""}
            <Link
              className="text-yellow-500 dark:text-yellow-400 underline"
              href="https://wa.link/vcbj5h"
            >
              WhatsApp {""}
            </Link>
            o un {""}
            <Link
              className="text-yellow-500 dark:text-yellow-400 underline"
              href="mailto:sebdevspace@gmail.com"
            >
              Correo electronico
            </Link>
          </p>
        </div>
      </div>
      <div
        className="w-10/12 md:w-full xl:w-11/12 2xl:w-7/12
      3xl:w-7/12
      mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
      >
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
