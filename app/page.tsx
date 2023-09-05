'use client'
import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

export default function Home() {
  return (
    <div className=" w-full h-full mx-auto mb-28">
      <div className="mt-12 mb-6 text-xl mx-auto max-w-2xl text-center dark:text-white lg:w-3/4 xl:w-1/2">
        <MyProfilePic />
      </div>
      <Posts />
      <div>
      </div>
    </div>
  );
}
