import Image from "next/image";
import Link from "next/link";
import Controller from "./Controller";
import BlogPosts from "./BlogPosts";

interface BlogPostType {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  categories: string[];
  content: string;
  isLoading: boolean;
}

const fetchPosts = () => {
  return fetch(`http://localhost:3000/api/hello`).then((res) => res.json());
};

export default async function Posts() {
  const startIndex = 2;
  const itemsPerPage = 10;
  const totalItems = 100;

  const posts = await fetchPosts();

  // Render the posts for the current page.
  return (
    <div className="">
      <BlogPosts posts={posts} />
      {/* <Controller
        startIndex={startIndex}
        itemsPerPage={itemsPerPage}
        totalItems={posts.length}
      /> */}
    </div>
  );
}

// const [isClient, setIsClient] = useState(false); // Nuevo estado para detectar si es cliente
// const [categoryFilter, setCategoryFilter] = useState("");
// const [posts, setPosts] = useState<BlogPost[]>([]);
// const [isLoading, setIsLoading] = useState(true);
// const [currentPage, setCurrentPage] = useState(1);
// const itemsPerPage = 9;
// useEffect(() => {
//   setIsClient(true); // Marcar como cliente en el efecto

//   async function fetchPosts() {
//     setIsLoading(true);
//     try {
//       const startIndex = (currentPage - 1) * itemsPerPage;
//       const response = await fetch(
//         `/api/hello?categoryFilter=${categoryFilter}&startIndex=${startIndex}&limit=${itemsPerPage}`
//       );
//       const data = await response.json();
//       setPosts(data);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//     setIsLoading(false);
//   }
//   fetchPosts();
// }, [categoryFilter, currentPage]);

// function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
//   setCategoryFilter(event.target.value);
//   setCurrentPage(1);
// }

/* {isClient ? ( 
        <div>
          <center className="adsbygoogle block mx-auto">
     
          </center>
          <div className="flex flex-col justify-center items-center mt-4">
            <h2 className="animate-bounce animate-infinite animate-duration-[100ms] animate-delay-[14ms] animate-ease-out text-3xl mt-6 font-bold text-center text-yellow-500 dark:text-yellow-400 title">
              Artículos
            </h2>
          </div>
          <div className=" my-2 w-7/12 mx-auto flex items-center justify-center filter">
            <label htmlFor="categoryFilter" className="text-gray-200  mr-2">
              Categoría:
            </label>
            <select
              id="categoryFilter"
              value={categoryFilter}
              onChange={handleCategoryChange}
              className="
                border  border-gray-700
                rounded-md
                text-gray-600 dark:text-gray-300
                h-10
                pl-5
                pr-10
                bg-gray-800
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
      ) : (
        <center>
          <Spinner />
        </center>
      )}
 
    </> */
