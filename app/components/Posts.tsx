'use client'
import BlogPosts from "./BlogPosts";
import { useEffect, useState } from "react";

interface BlogPostType {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  categories: string[];
  content: string;
  isLoading: boolean;
}

const fetchPosts = async (): Promise<BlogPostType[]> => {
  return fetch(`http://localhost:3000/api/hello`).then((res) => res.json());
};

function Posts(): JSX.Element {
  const [posts, setPosts] = useState<BlogPostType[] | null>(null);

  useEffect(() => {
    // Fetch the posts.
    fetchPosts().then((posts) => setPosts(posts));
  }, []);

  if (posts === null) {
    return <div>Loading...</div>;
  } else {
    return <BlogPosts posts={posts} />;
  }
}

export default Posts;