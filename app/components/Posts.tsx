"use client";
import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Link from "next/link";
import { filterOptions } from "../constantes/constantes";
import NoEncontrado from "./NotFound";
import Spinner from "./Spinner";
import Controller from "./Controller";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  categories: string[];
  content: string;
}

export default function Posts() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      try {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const response = await fetch(
          `/api/hello?categoryFilter=${categoryFilter}&startIndex=${startIndex}&limit=${itemsPerPage}`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
      setIsLoading(false);
    }
    fetchPosts();
  }, [categoryFilter, currentPage]);

  function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setCategoryFilter(event.target.value);
    setCurrentPage(1); // Reset to the first page when changing category
  }
  return (
    <>
      ;
      <div className="flex flex-col justify-center items-center ">
        <h2 className="animate-bounce animate-infinite animate-duration-[100ms] animate-delay-[14ms] animate-ease-out text-2xl font-bold text-center text-yellow-500 dark:text-yellow-400">
          Artículos
        </h2>
        <div className="w-10/12 md:w-full xl:w-11/12 2xl:w-7/12 3xl:w-7/12">
          {/* <p className="text-center w-1/2 mx-auto text-gray-600 dark:text-gray-300 mt-0 p-2">
            Si deseas escribir un artículo para este blog sobre algún tema,
            estaría encantado de leerlo y publicarlo. Puedes contactarme por mi
            cuenta de{" "}
            <Link
              href="https://www.instagram.com/abelardo.blog/"
              target="_blank"
              className="text-yellow-500 dark:text-yellow-400 underline"
            >
              Instagram.{" "}
            </Link>
            O si lo prefieres, puedes enviarme un mensaje a{" "}
            <Link
              className="text-yellow-500 dark:text-yellow-400 underline"
              href="https://wa.link/vcbj5h"
            >
              WhatsApp{" "}
            </Link>
            o un{" "}
            <Link
              className="text-yellow-500 dark:text-yellow-400 underline"
              href="mailto:sebdevspace@gmail.com"
            >
              Correo electrónico
            </Link>
          </p> */}
        </div>
      </div>
      <div className=" my-2 w-7/12 mx-auto flex items-center justify-center">
        <label
          htmlFor="categoryFilter"
          className="text-gray-600 dark:text-gray-300 mr-2"
        >
          Categoría:
        </label>
        <select
          id="categoryFilter"
          value={categoryFilter}
          onChange={handleCategoryChange}
          className="
            border border-gray-300 dark:border-gray-700
            rounded-md
            text-gray-600 dark:text-gray-300
            h-10
            pl-5
            pr-10
            bg-white dark:bg-gray-800
            hover:border-gray-400 dark:hover:border-gray-600
            focus:outline-none
            appearance-none
            transition
            duration-500
            ease-in-out"
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        {isLoading ? (
          <div className="flex items-center justify-center mt-24">
            {/* Use the Spinner component */}
            <Spinner />
          </div>
        ) : (
          <div className="w-10/12 md:w-full xl:w-11/12 2xl:w-6/12 3xl:w-6/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {posts && posts.length > 0
              ? posts.map((post, index) => {
                  const startIndex = (currentPage - 1) * itemsPerPage; // Calculate startIndex here
                  if (
                    index >= startIndex &&
                    index < startIndex + itemsPerPage
                  ) {
                    return <ListItem key={post.id} post={post} />;
                  }
                  return null;
                })
              : null}
          </div>
        )}
        {/* Here's the "NoEncontrado" message */}
        {!isLoading && posts.length === 0 && (
          <div className="flex items-center justify-center mt-24">
            <NoEncontrado />
          </div>
        )}
      </div>
      <Controller
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        posts={posts}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
}
