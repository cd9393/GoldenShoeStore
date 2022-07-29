import { useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../store/auth-context";
import { login } from "../../util/api";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const { sendRequest, status, error, data } = useHttp(login);

  useEffect(() => {
    if (status === "completed" && !error) {
      authCtx.login(data.token);
      navigate("/account");
    }
  }, [error, data, status, authCtx]);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //add validation

    const body = {
      email: enteredEmail,
      password: enteredPassword,
    };

    sendRequest(body);
  };
  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
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
        <div className={classes.actions}>
          {error && <span className={classes.errorMessage}>{error}</span>}
          <button>Login</button>
          <a href="/account/register" className={classes.toggle}>
            Create new account
          </a>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
