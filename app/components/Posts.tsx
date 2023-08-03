import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <>
      <div
        className="w-10/12 md:w-full xl:w-11/12 2xl:w-10/12
      3xl:w-7/12
      mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
