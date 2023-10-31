import BlogPosts from "./BlogPosts";

interface BlogPostType {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  categories: string[];
  content: string;
  isLoading: boolean;
}

const fetchPosts = async () => {
  const res = await fetch(`http://localhost:3000/api/hello`);
  return await res.json();
};

export default async function Posts(): Promise<JSX.Element> {
  const posts = await fetchPosts();
  return (
    <>
      <BlogPosts posts={posts} />
    </>
  );
}
