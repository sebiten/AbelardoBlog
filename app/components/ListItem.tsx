import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, categories, imageUrl } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <div>
      <Link
        href={`/posts/${id}`}
        className="blog-box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 shadow-lg gap-4 border-2 border-gray-200 dark:border-gray-800 rounded-md p-4 my-4 bg-white dark:bg-gray-800"
      >
        <div className="blog-content">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h3>
          <p className="text-sm md:text-base font-bold text-gray-500 dark:text-gray-400 mb-1">
            {formattedDate}
          </p>
          <p className="text-sm md:text-base font-bold text-yellow-600 dark:text-yellow-400 mb-4">
            {categories}
          </p>
        </div>
        <div>
          <Image
            className="rounded-md object-cover h-48 w-full"
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
          />
        </div>
      </Link>
    </div>
  );
}
