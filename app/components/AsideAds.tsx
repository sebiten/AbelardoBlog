import { AdUnit } from "@eisberg-labs/next-google-adsense";

const AsideAds = () => {
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 w-1/4 bg-gray-100">
        <AdUnit
          className="adsbygoogle block"
          data-ad-client="ca-pub-6692046911486022"
          data-ad-slot="4856002203"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
      <div className="fixed top-0 bottom-0 right-0 w-1/4 bg-gray-100">
        <AdUnit
          className="adsbygoogle block"
          data-ad-client="ca-pub-6692046911486022"
          data-ad-slot="2753363290"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </>
  );
};

export default AsideAds;
