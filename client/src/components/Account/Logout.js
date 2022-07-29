import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import classes from "./Logout.module.css";

const Logout = () => {
  return (
    <section className={classes.logoutSection}>
      <button className={classes.btn}>
        <div className={classes.descriptionContainer}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <span>Log out</span>
        </div>
      </button>
    </section>
  );
};

export default Logout;
