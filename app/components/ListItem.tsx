import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"
import Image from "next/image"


type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    const { id, title, date, imageUrl} = post
    
    const formattedDate = getFormattedDate(date)

    return (
        <Link
            className="hover:animate-pulse"
        href={`/posts/${id}`}>
      <>
        <li className="mt-4 rounded-md overflow-hidden shadow-md bg-white dark:bg-gray-800 h-72 list-none">
          {imageUrl && (
            <Image
            width={300}
            height={300}
              src={imageUrl}
              alt="image"
              className="w-full h-40 object-cover"
            />
          )}
          <div className="p-4 h-32">
            <h3 className="text-xl font-semibold dark:text-white/90 mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-green-200">{formattedDate}</p>
          </div>
        </li>
      </>
    </Link>
    )
}