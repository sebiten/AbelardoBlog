import AsideRight from "./components/AsideRight";
import Heroydolar from "./components/Heroydolar";
import Posts from "./components/Posts";
import Pronostico from "./components/Pronostico";

export const revalidate = 86400;

function Home() {
  return (
    <>
      <div className="w-full h-full mx-auto mb-10 ">
        <div className="mt-2 mb-6 text-xl mx-auto text-white w-full">
          {/* @ts-expect-error Async Server Component */}
          <Heroydolar />
          {/* @ts-expect-error Async Server Component */}
          <Posts />
          <AsideRight />
        </div>
      </div>
    </>
  );
}
export default Home;
