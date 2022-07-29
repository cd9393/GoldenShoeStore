import { useState } from "react";

import "./NewsLetterSignup.css";
import React from "react";

const NewsLetterSignup = () => {
  const [email, setEmail] = useState("");

  const onTextChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("posted email to mailing list");
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
            onChange={onTextChange}
          />
          <button className="submit-button" type="submit">
            Submit
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
