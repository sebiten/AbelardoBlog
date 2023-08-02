import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, imageUrl, categories } = post;

  const formattedDate = getFormattedDate(date);

  return (
    <Link
      className="hover:scale-105 gap-2 transition-all duration-200 ease-in-out relative"
      href={`/posts/${id}`}
    >
      <li className="mt-4 rounded-md shadow-md bg-white dark:bg-gray-800 h-[400px] list-none">
        {imageUrl && (
          <Image
            width={300}
            height={300}
            src={imageUrl}
            alt="image"
            className="w-full h-60 object-cover"
          />
        )}
        <div className="p-4 h-32">
          <h3
            className="text-xl font-semibold dark:text-white/90 mb-2
            hover:text-yellow-500
            "
          >
            {title}
          </h3>
          <p className="text-sm text-yellow-600 font-bold">{formattedDate}</p>
          <div className="absolute bottom-0 left-4 ">
            <p className="text-sm text-gray-500 font-bold dark:text-white/60">
              {categories}
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
}
