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
    <div className="mb-24 text-white text-center">
      <p className="text-2xl font-bold text-yellow-500 mb-4">
        ¡Gracias por leer!
        <br></br>
        No olvides suscribirte para no perderte ninguna novedad.
      </p>
      <div className="flex items-center justify-center space-x-4">
        <input
          onChange={(event) => setEmail(event?.target?.value ?? "")}
          type="email"
          placeholder="Tu mejor email :)"
          className="appearance-none rounded-l-lg border-2 border-yellow-500 py-2 px-4  bg-gray-800 text-white placeholder-gray-400 focus:outline-none w-[440px]"
          onKeyUp={handleInputKeyEvent}
        />
        <button
          className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-r-lg hover:bg-yellow-600 transition duration-300 focus:outline-none font-bold"
          onClick={handleFormSubmit}
        >
          Enviar
        </button>
      </div>
      <div className="min-h-42px mt-4">
        {status === "sending" ? <Spinner /> : null}
        {status === "error" || error ? (
          <div className="text-red-700 pt-2">
            {error ? <div dangerouslySetInnerHTML={{ __html: error }} /> : null}
          </div>
        ) : null}
        {status === "success" && error !== "error" && !error && (
          <div className="text-green-500 font-bold pt-2">
            <div dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
