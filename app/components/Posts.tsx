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
  return fetch("http://[::1]:3000/api/hello").then((res) => res.json());
};

async function Posts(): Promise<JSX.Element> {
  const posts = await fetchPosts();

  return <BlogPosts posts={posts} />;
}
export default Posts;
