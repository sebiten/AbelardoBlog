import React from "react";
import Spinner from "./Spinner";
import NoEncontrado from "./NotFound";
import ListItem from "./ListItem";

const Items = ({ posts }: any) => {
  return (
    <div className="w-12/12 md:w-full xl:w-11/12 2xl:w-8/12 3xl:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 ">
      {posts && posts.length > 0
        ? posts.map((post: any, index: any) => {
            {
              return <ListItem key={post.id} posts={posts} />;
            }
            return null;
          })
        : null}
    </div>
  );
};

export default Items;
