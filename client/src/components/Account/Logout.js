import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import classes from "./Logout.module.css";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Logout = () => {
  const authCtx = useContext(AuthContext);

  const onBtnClick = () => {
    authCtx.logout();
  };
  return (
    <section className={classes.logoutSection}>
      <button className={classes.btn} onClick={onBtnClick}>
        <div className={classes.descriptionContainer}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <span>Log out</span>
        </div>
      </button>
    </section>
  );
};

export default Logout;
