import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classes from "./ListItem.module.css";

const ListItem = ({ to, header, icon }) => {
  return (
    <Link to={to}>
      <div className={classes.descriptionContainer}>
        <FontAwesomeIcon icon={icon} />
        <span>{header}</span>
      </div>
    </Link>
  );
};

export default ListItem;
