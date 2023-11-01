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
async function getPosts() {
  try {
    const res = await fetch("http://localhost:3000/api/hello");
    
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    // Si la primera solicitud falla, intenta con 127.0.0.1
    console.error("Failed to fetch from localhost, trying 127.0.0.1...");
    
    const resFallback = await fetch("http://127.0.0.1:3000/api/hello");

    if (!resFallback.ok) {
      throw new Error("Failed to fetch data");
    }

    return resFallback.json();
  }
}


async function Posts() {
  const posts = await getPosts();

  if (posts === null) {
    return (
      <center>
        <Spinner />
      </center>
    );
  } else {
    return (
      <>
        <h2 className="text-yellow-500 font-bold text-center text-3xl animate-bounce">
          Artículos
        </h2>
        <BlogPosts posts={posts} />;
      </>
    );
  }
}

export default Posts;
