import Heroydolar from "./components/Heroydolar";
import Posts from "./components/Posts";

function Home() {
  return (
    <>
      <div className=" w-full h-full mx-auto mb-10 ">
        <div className="mt-2 mb-6 text-xl mx-auto text-center dark:text-white w-full xl:max-w-[90ch]">
          {/* @ts-expect-error Server Component */}
          <Heroydolar />
          {/* @ts-expect-error Server Component */}

          <Posts />
        </div>
      </div>
    </>
  );
}
export default Home;
