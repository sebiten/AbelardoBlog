import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";
import { Meta } from "@/types";

type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, imageUrl, tags } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="flex flex-col ">
      <Link href={`/posts/${id}`} className="">
        <div className="mt-2 hover:scale-95 duration-500 bg-gray-800 rounded-lg shadow-md">
          {imageUrl && (
            <Image
              width={1920}
              height={1080}
              src={imageUrl}
              alt={id}
              quality={100}
              priority={true}
              className="object-cover m-0 w-full rounded-lg"
            />
          )}
          <div className="flex flex-col items-center justify-center">
            <p className=" text-sm text-center text-yellow-600 font-bold">
              {formattedDate}
            </p>
            <h2 className="text-lg -mt-2 text-center font-normal line-clamp-4 text-gray-200 hover:text-yellow-500">
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </li>
  );
}
