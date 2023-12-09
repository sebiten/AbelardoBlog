"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Pronostico from "./Pronostico";
import Controller from "./Controller";
import getFormattedDate from "@/lib/getFormattedDate";
import GoogleAdUnit from "nextjs13_google_adsense";

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
  const [currentSliceEnd, setCurrentSliceEnd] = useState(12);
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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mb-10">
        {posts
          .slice(currentSliceStart, currentSliceEnd)
          .map((post: BlogPost) => (
            <div key={post.id} className="flex flex-col relative">
              <Link href={`/posts/${post.id}`} className="relative">
                <div className="mt-2 relative hover:scale-95 duration-500 p-4 bg-gray-800 rounded-lg shadow-md">
                  {post.imageUrl && (
                    <Image
                      width={1920}
                      height={1080}
                      src={post.imageUrl}
                      alt={post.title}
                      quality={100}
                      priority={true}
                      className="object-cover w-full rounded-lg"
                    />
                  )}
                  <div className="flex flex-col p-4 h-44">
                    <h3 className="text-lg font-normal text-start mb-2 text-gray-200 hover:text-yellow-500">
                      {post.title}
                    </h3>
                    <div>
                      <p className="text-sm text-start text-yellow-600 font-bold">
                        {getFormattedDate(post.date)}
                      </p>
                    </div>
                    <div className="absolute left-10- bottom-3">
                      <p className="text-sm text-center text-gray-500 font-bold">
                        {post.categories}
                      </p>
                    </div>
                  </div>
                </div>
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
      <center className="mx-auto">
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%" }}
            data-ad-client="ca-pub-6692046911486022"
            data-ad-slot="1083276133"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
      </center>
    </div>
  );
}
