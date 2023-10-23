import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";
import Favorite from "./Favorite";

type BlogPost = {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  categories: string[];
  content: string;
};


type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, categories, imageUrl } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <div
      className="
    flex flex-col
    relative
    m-4
      "
    >
      <Link
        className="
        
      relative"
        href={`/posts/${id}`}
      >
        <>
          <li className="mt-2 h-full relative hover:scale-95 duration-500 p-2 overflow-hidden bg-white dark:bg-gray-800 h- list-none light:border-gray-200 border dark:border-gray-700 rounded-lg shadow-2xl ">
            {imageUrl && (
              <Image
                width={1920}
                height={1080}
                src={imageUrl}
                alt={title}
                quality={100}
                priority={true}
                className=" object-fit mx-auto p-2 rounded-lg w-full"
              />
            )}
            <div className="flex flex-col p-4 h-44 ">
              <h3
                className="text-lg font-semibold dark:text-white/90 mb-2
          hover:text-yellow-500"
              >
                {title}
              </h3>
              <div>
                <p className="text-sm text-yellow-600 font-bold">
                  {formattedDate}
                </p>
              </div>
              <div className="absolute left-6 bottom-4">
                <p className="text-sm text-gray-500 font-bold dark:text-white/60">
                  {categories}
                </p>
              </div>
            </div>
          </li>
        </>
      </Link>
      <div
        className="
              absolute
              bottom-1
              right-2
              mt-2
              mr-2
              cursor-cell
              z-0"
      >
        <Favorite
          id={id}
          imageUrl={imageUrl}
          categories={categories}
          date={date}
          title={title}
        />
      </div>
    </div>
  );
}
