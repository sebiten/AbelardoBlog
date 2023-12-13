import BlogPosts from "../components/BlogPosts";
import { useEffect, useState } from "react";
import { getSortedPostsData } from "@/lib/posts";
import Spinner from "../components/Spinner";

interface Post {
  id: string;
  title: any;
  date: any;
  imageUrl: any;
  categories: any;
  content: string;
  ok?: boolean; // Propiedad opcional
}

async function getPosts() {
  const res = await getSortedPostsData();
  // Verificar si la variable `res` es de tipo `Response`
  if (res instanceof Response) {
    return res.json();
  } else {
    throw new Error("Failed to fetch data");
  }
}
async function Posts() {
  const posts: Post[] = await getSortedPostsData();

  if (posts === null) {
    return (
      <center>
        <Spinner />
      </center>
    );
  } else {
    return (
      <>
        <h2 className="text-yellow-500 mt-10 font-bold text-center text-3xl animate-bounce">
          Artículos
        </h2>

        <BlogPosts posts={posts} />
      </>
    );
  }
}

export default Posts;