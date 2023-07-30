import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"

export default function Posts() {
    const posts = getSortedPostsData()

    return (
        <section className="mt-6 p-4 mx-auto max-w-6xl ">
        <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {posts.map(post => (
            <ListItem key={post.id} post={post} />
          ))}
        </div>
      </section>
    )
}