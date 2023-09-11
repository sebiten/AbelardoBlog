"use client";
import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

export default function Home() {
  return (
    <div className=" w-full h-full mx-auto mb-10">
      <div className="mt-12 mb-6 text-xl mx-auto text-center dark:text-white max-w-[65ch]">
        <MyProfilePic />
      </div>
      <Posts />
    </div>
  );
}
