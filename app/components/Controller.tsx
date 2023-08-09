
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
    <div className="flex items-center justify-center my-10 gap-4">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className=" px-4 py-2 bg-gray-300 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-md"
      >
        ◀
      </button>
      <p className="text-gray-600 dark:text-gray-300 font-bold ">
        Page {currentPage} of {Math.ceil(posts.length / itemsPerPage)}
      </p>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={posts.length === 0 || posts.length < itemsPerPage}
        className="px-4 py-2 bg-gray-300 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-md"
      >
        ▶
      </button>
    </div>
  );
}
