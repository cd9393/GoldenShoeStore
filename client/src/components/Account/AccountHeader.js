import classes from "./AccountHeader.module.css";

const AccountHeader = ({ name }) => {
  return (
    <section className={classes.headerContainer}>
      <h1>Welcome</h1>
      <p>{name}</p>
    </section>
  );
};

export default AccountHeader;
