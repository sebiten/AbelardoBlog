"use client";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";
import GoogleAdUnit from "nextjs13_google_adsense";

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <div className="p-6">
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={(props) => {
          const { subscribe, status, message } = props || {};
          return (
            <NewsletterForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          );
        }}
      />
      <center className="mx-auto">
        <GoogleAdUnit>
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%" }}
            data-ad-client="ca-pub-6692046911486022"
            data-ad-slot="8770194466"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </GoogleAdUnit>
      </center>
    </div>
  );
};

export default NewsletterSubscribe;
