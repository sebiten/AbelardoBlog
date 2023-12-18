import NewsletterSubscribe from "./components/Apis/NewsletterSubscribe";
import AsideRight from "./components/AsideRight";
import Contacto from "./components/Contacto";
import Heroydolar from "./components/Heroydolar";
import Posts from "./components/Posts";
import Pronostico from "./components/Pronostico";
import Redes from "./components/Redes";

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
          <Redes />
          <NewsletterSubscribe />
        </div>
      </div>
    </>
  );
}
export default Home;
