"use client";
import { useState } from "react";
import Spinner from "../Spinner";
import { sanitize } from "./misc";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });
    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <div className="text-gray-700 dark:text-white flex flex-col items-center justify-center w-full mx-auto transition duration-500 ease-in-out transform rounded-xl p-8">
      <div className="flex items-center mt-4">
        <div>
          <input
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            type="email"
            placeholder="Your email"
            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block px-4 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            onKeyUp={handleInputKeyEvent}
          />
        </div>
        <div className="flex-1 h-full">
          <button
            className="cursor-pointer text-white py-[6px] px-5 rounded border border-white hover:border-yellow-500 hover:text-yellow-500 transition duration-300 h-full"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="min-h-42px mt-4">
        {status === "sending" ? <Spinner /> : null}
        {status === "error" || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {status === "success" && error !== "error" && !error && (
          <div
            className="text-green-200 font-bold pt-2"
            dangerouslySetInnerHTML={{ __html: sanitize(message) }}
          />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
