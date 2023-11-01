"use client";
import BlogPosts from "./BlogPosts";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

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
    return (
      <center>
        <Spinner />
      </center>
    );
  } else {
    return <BlogPosts posts={posts} />;
  }
}

export default Posts;
