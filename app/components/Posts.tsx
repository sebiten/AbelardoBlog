"use client";
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

function Posts(): JSX.Element {
  const [posts, setPosts] = useState<BlogPostType[] | null>(null);

  useEffect(() => {
    // Fetch all available blog posts.
    async function fetchPosts() {
      try {
        const response = await fetch(`/api/hello`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  if (posts === null) {
    return <div>No posts available.</div>;
  } else {
    return <BlogPosts posts={posts} />;
  }
}

export default Posts;
