import { useRef, useState } from "react";
import useHttp from "../../../../hooks/use-http";
import "./NewsLetterSignup.css";
import React from "react";
import { joinNewsLetter } from "../../../../util/api";
import { validEmail } from "../../../../util/textValidation";

const NewsLetterSignup = () => {
  const emailInputRef = useRef();
  const [submitError, setSubmitError] = useState("");
  const { status, error, sendRequest } = useHttp(joinNewsLetter);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    if (!validEmail(email)) {
      setSubmitError("Please enter a valid email address");
      return;
    }
    sendRequest(email);
  };

  return (
    <div className="newsletter-container">
      <h3>Join our mailing list</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore fugit
        adipisci velit ex dignissimos a deserunt temporibus quisquam totam ipsa!
      </p>
      <div>
        <form className="form-container" onSubmit={handleFormSubmit}>
          <input
            id="email"
            type="email"
            className="email-input"
            placeholder="Email address"
            ref={emailInputRef}
          />
          {submitError && <span className="error-message">{submitError}</span>}
          <button className="submit-button" type="submit">
            {status === "completed" && !error ? "Success" : "Submit"}
          </button>
        </form>
      </div>
      <p></p>
      <a className="privacy-link" href="/privacy-policy">
        View our Privacy Policy
      </a>
    </div>
  );
};

export default NewsLetterSignup;
