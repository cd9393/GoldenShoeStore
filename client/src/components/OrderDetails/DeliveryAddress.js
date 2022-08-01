import classes from "./DeliveryAddress.module.css";

const DeliveryAddress = ({ address }) => {
  const { name, street, city, postcode, country, mobile } = address;
  return (
    <section>
      <h4 className={classes.header}>DELIVERY ADDRESS</h4>
      <div className={classes.deliveryContainer}>
        <span>{name}</span>
        <span>{street}</span>
        <span>{city}</span>
        <span>{postcode}</span>
        <span>{country}</span>
        <span>{mobile}</span>
      </div>
    </section>
  );
};

export default DeliveryAddress;
