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
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  return (
    <div className="flex items-center justify-center mt-10 gap-4">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-md"
      >
        ◀
      </button>
      <p className="text-gray-600 dark:text-gray-300 font-bold">
        Page {currentPage} of {totalPages}
      </p>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages} // Disable when currentPage is the last page
        className="px-4 py-2 bg-gray-300 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-md"
      >
        ▶
      </button>
    </div>
  );
}
