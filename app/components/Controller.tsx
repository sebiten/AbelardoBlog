import React from "react";

type Props = {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  posts: any[];
  itemsPerPage: number;
};

export default function Controller({
  setCurrentPage,
  currentPage,
  posts,
  itemsPerPage,
}: Props) {
  return (
    <div className="flex items-center justify-center my-4">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="mr-2 px-4 py-2 bg-gray-300 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-md"
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={posts.length === 0 || posts.length < itemsPerPage}
        className="px-4 py-2 bg-gray-300 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-md"
      >
        Next
      </button>
    </div>
  );
}
