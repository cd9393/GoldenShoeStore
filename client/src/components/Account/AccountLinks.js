import classes from "./AccountLinks.module.css";
import ListItem from "./ListItem";
const AccountLinks = ({ links }) => {
  return (
    <ul className={classes.linksList}>
      {links.map((link) => (
        <li className={classes.listItem} key={link.to}>
          <ListItem to={link.to} header={link.header} icon={link.icon} />
        </li>
      ))}
    </ul>
  );
};

export default AccountLinks;
