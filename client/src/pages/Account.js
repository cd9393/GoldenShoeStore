import {
  faTruckMoving,
  faAddressCard,
  faHouse,
  faCreditCard,
  faCircleInfo,
  faUpRightFromSquare,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import AccountHeader from "../components/Account/AccountHeader";
import AccountLinks from "../components/Account/AccountLinks";
import Logout from "../components/Account/Logout";

const UserLinks = [
  {
    to: "/account/orders",
    header: "My orders",
    icon: faReceipt,
  },
  {
    to: "/account/returns",
    header: "My returns",
    icon: faTruckMoving,
  },
  {
    to: "/account/details",
    header: "My details",
    icon: faAddressCard,
  },
  {
    to: "/account/address-book",
    header: "Address Book",
    icon: faHouse,
  },
  {
    to: "/account/payment-methods",
    header: "Payment methods",
    icon: faCreditCard,
  },
];

const supportLinks = [
  {
    to: "/customer-care",
    header: "Need help?",
    icon: faCircleInfo,
  },
  {
    to: "/customer-care/delivery",
    header: "Where's my order",
    icon: faUpRightFromSquare,
  },
  {
    to: "/customer-care/returns",
    header: "How do I make a return?",
    icon: faUpRightFromSquare,
  },
];

const Account = () => {
  // fetch user details to gather first and second name for welcome message
  return (
    <section>
      <AccountHeader name="Craig Dunlop" />
      <AccountLinks links={UserLinks} />
      <AccountLinks links={supportLinks} />
      <Logout />
    </section>
  );
};

export default Account;
