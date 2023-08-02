import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, imageUrl, categories } = post;

  const linkPusher = (id: string) => {
    return `/posts/${id}`;
  };

  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 rounded-md overflow-hidden shadow-md bg-white dark:bg-gray-800 h-[400px] list-none">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="object-cover h-48"
      />
      <a
        className="relative"
        href={linkPusher(id)}
      >
        <div className="p-4 h-32">
          <h3
            className="text-xl font-semibold dark:text-white/90 mb-2
            hover:text-yellow-500
            "
          >
            {title}
          </h3>
          <p className="text-sm text-yellow-600 font-bold">{formattedDate}</p>
          <div className="absolute bottom-[-50px] left-4 ">
            <p className="text-sm text-gray-500 font-bold dark:text-white/60">
              {categories}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
}
