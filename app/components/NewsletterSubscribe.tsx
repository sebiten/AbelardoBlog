"use client";
import MailchimpSubscribe from "react-mailchimp-subscribe"; 
import NewsletterForm from "./NewsletterForm";

const NewsletterSubscribe: React.FC = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  if (!MAILCHIMP_URL) {
    // Manejar el caso en que MAILCHIMP_URL sea undefined o null
    return <div>URL de Mailchimp no definida</div>;
  }

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props: any) => {
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
  );
};

export default NewsletterSubscribe;
