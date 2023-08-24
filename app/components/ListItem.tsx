import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";
import Favorite from "./Favorite";

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
      "
    >
      <Link
        className="
        
      relative"
        href={`/posts/${id}`}
      >
        <>
          <li className="mt-4 rounded-md overflow-hidden shadow-md bg-white dark:bg-gray-800 h-[420px] list-none ">
            {imageUrl && (
              <img
                width={300}
                height={300}
                src={imageUrl}
                alt={title}
                className="w-full h-60 object-cover mx-auto p-4"
              />
            )}
            <div className="p-4 h-32 ">
              <h3
                className="text-xl font-semibold dark:text-white/90 mb-2
          hover:text-yellow-500"
              >
                {title}
              </h3>
              <p className="text-sm text-yellow-600 font-bold">
                {formattedDate}
              </p>
              <div className="absolute bottom-1 left-4 ">
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
              right-0
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
