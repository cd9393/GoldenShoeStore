import { useEffect, useRef } from "react";
import useHttp from "../../hooks/use-http";
import { registerAccount } from "../../util/api";

import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const titleRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const { sendRequest, status, error, data } = useHttp(registerAccount);

  useEffect(() => {
    console.log("status", status);
    console.log("error", error);
    console.log("data", data);
  }, [error, data, status]);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredTitle = titleRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

    //add validation

    const body = {
      email: enteredEmail,
      password: enteredPassword,
      title: enteredTitle,
      firstName,
      lastName,
    };

    sendRequest(body);
  };
  return (
    <section className={classes.auth}>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.flexRow}>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <select name="title" id="title" required ref={titleRef}>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Mr">Mr</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
          <div className={`${classes.control} ${classes.fullWidth}`}>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" required ref={firstNameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" required ref={lastNameRef} />
        </div>
        <div className={classes.actions}>
          {error && <span className={classes.errorMessage}>{error}</span>}
          <button>Create Account</button>
          <a href="/account/login" className={classes.toggle}>
            Login with existing account
          </a>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
