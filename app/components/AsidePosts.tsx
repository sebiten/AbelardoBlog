import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IAsidePostsProps {
  posts: Array<{
    id: string;
    title: string;
    imageUrl: string;
    // Add other properties as needed
  }>;
}

const AsidePosts: React.FC<IAsidePostsProps> = ({ posts }) => {
  return (
    <aside>
      <h3 className="text-2xl font-bold pl-2 text-yellow-500 text-center">
        Más artículos
      </h3>
      <ul className="flex">
        {posts.slice(0, 4).map((relatedPost) => (
          <li key={relatedPost.id} className=" list-none">
            <Link href={`/posts/${relatedPost.id}`}>
              <Image
                width={1920}
                height={1080}
                src={relatedPost.imageUrl}
                alt={relatedPost.title}
                quality={100}
                priority={true}
                className="object-cover w-full rounded-lg"
              />
            </Link>
          </li>
        ))}
      </ul>
      {/* <div>
        <div className="flex items-center justify-center mb-10  text-white mt-4">
          <Link
            className="animate-pulse animate-infinite animate-duration-[100ms] animate-delay-[22ms] animate-ease-out text-yellow-600 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-500 font-bold text-3xl my-4 mb-0"
            href="/"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div> */}
    </aside>
  );
};

export default AsidePosts;
