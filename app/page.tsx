"use client";
import Posts from "./components/Posts";
import MyProfilePic from "./components/Heroydolar";

export default function Home() {
  return (
    <div className=" w-full h-full mx-auto mb-10">
      <div className="mt-2 mb-6 text-xl mx-auto text-center dark:text-white w-full xl:max-w-[90ch]">
        <MyProfilePic />
      </div>
      <Posts />
    </div>
  );
}
