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

async function Posts(): Promise<JSX.Element> {
  const fetchPosts = async () => {
    const response = await fetch("http://127.0.0.1:3000/api/hello");
    const posts = await response.json();
    return posts;
  };
  const posts = await fetchPosts();

  return <BlogPosts posts={posts} />;
}
export default Posts;
