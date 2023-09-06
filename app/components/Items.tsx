import React from "react";
import Spinner from "./Spinner";
import NoEncontrado from "./NotFound";
import ListItem from "./ListItem";


const Items = ({isLoading, posts, currentPage, itemsPerPage }: any) => {
  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center mt-24">
          {/* Use the Spinner component */}
          <Spinner />
        </div>
      ) : (
        <div className="w-10/12 md:w-full xl:w-11/12 2xl:w-6/12 3xl:w-6/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4">
          {posts && posts.length > 0
            ? posts.map((post: any, index: any) => {
                const startIndex = (currentPage - 1) * itemsPerPage; // Calculate startIndex here
                if (index >= startIndex && index < startIndex + itemsPerPage) {
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
  );
};

export default Items;
