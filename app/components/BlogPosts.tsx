"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Pronostico from "./Pronostico";
import Controller from "./Controller";
import getFormattedDate from "@/lib/getFormattedDate";

interface BlogPostType {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  categories: string[];
  content: string;
}

export default function BlogPosts({ posts }: { posts: BlogPostType[] }) {
  const [currentSliceStart, setCurrentSliceStart] = useState(0);
  const [currentSliceEnd, setCurrentSliceEnd] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = posts.length;

  const nextPage = () => {
    setCurrentSliceStart(currentSliceStart + 4);
    setCurrentSliceEnd(currentSliceEnd + 4);
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    setCurrentSliceStart(currentSliceStart - 4);
    setCurrentSliceEnd(currentSliceEnd - 4);
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="w-12/12 md:w-full xl:w-12/12 2xl:w-12/12 3xl:w-12/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 place-content-center">
        {posts
          .slice(currentSliceStart, currentSliceEnd)
          .map((post: BlogPost) => (
            <div key={post.id} className="flex flex-col relative m-4">
              <Link className="relative" href={`/posts/${post.id}`}>
                <>
                  <li className="mt-2 h-full relative hover:scale-95 duration-500 p-2 overflow-hidden text-white border border-gray-700   bg-gray-800 list-none rounded-lg shadow-2xl ">
                    {post.imageUrl && (
                      <Image
                        width={1920}
                        height={1080}
                        src={post.imageUrl}
                        alt={post.title}
                        quality={100}
                        priority={true}
                        className=" object-fit mx-auto p-2 rounded-lg w-full"
                      />
                    )}
                    <div className="flex items-start flex-col p-4 h-44 ">
                      <h3
                        className="text-sm text-start font-semibold dark:text-white/90 mb-2
          hover:text-yellow-500"
                      >
                        {post.title}
                      </h3>
                      <div>
                        <p className="text-sm text-yellow-600 font-bold">
                          {getFormattedDate(post.date)}
                        </p>
                      </div>
                      <div className="absolute left-6 bottom-4">
                        <p className="text-sm text-gray-500 font-bold text-white/60">
                          {post.categories}
                        </p>
                      </div>
                    </div>
                  </li>
                </>
              </Link>
            </div>
          ))}
      </div>
      <Controller
        currentSliceStart={currentSliceStart}
        currentSliceEnd={currentSliceEnd}
        currentPage={currentPage}
        nextPage={nextPage}
        previousPage={previousPage}
        totalItems={totalItems}
      />
    </div>
  )
}
