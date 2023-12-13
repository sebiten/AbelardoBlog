import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import CustomImage from "./CustomImage";
import Image from "next/image";

type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, imageUrl, tags } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <Link
      href={`/posts/${id}`}
      className="text-xl p-2 no-underline text-white shadow-xl hover:bg-gray-600/10  "
    >
      <div className="">
        <CustomImage src={imageUrl} alt={title} />
      </div>
      <div className="flex flex-col items-start text-white justify-center">
        <p className="text-start text-white my-4">{title}</p>
        <p className="text-sm text-yellow-400 font-bold mt-1">{formattedDate}</p>
      </div>
    </Link>
  );
}
