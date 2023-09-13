"use client";
import React, { useState, useEffect } from "react";
import { filterOptions } from "../constantes/constantes";
import Controller from "./Controller";
import Items from "./Items";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  categories: string[];
  content: string;
  isLoading: boolean;
}
type Tiempo = {};

export default function Posts() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [tiempo, setTiempo] = useState<Tiempo[]>([]);
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
      <div>
        <div className="flex flex-col justify-center items-center mt-4">
          <h2 className="animate-bounce animate-infinite animate-duration-[100ms] animate-delay-[14ms] animate-ease-out text-2xl font-bold text-center text-yellow-500 dark:text-yellow-400 title">
            Artículos
          </h2>
        </div>
        <div className=" my-2 w-7/12 mx-auto flex items-center justify-center filter">
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
        <Items
          isLoading={isLoading}
          posts={posts}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
        <Controller
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          posts={posts}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </>
  );
}
