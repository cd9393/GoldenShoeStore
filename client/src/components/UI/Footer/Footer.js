import "./Footer.css";
import LinkAccordion from "./LinkAccordion/LinkAccordion";
import NewsLetterSignup from "./NewsLetterSignUp/NewsLetterSignup";

const Footer = () => {
  return (
    <footer>
      <NewsLetterSignup />
      <div className="accordions-container">
        <LinkAccordion
          header="Help & Info"
          links={[
            {
              text: "Contact Us",
              url: "/contact-us",
            },
            {
              text: "Delivery",
              url: "/delivery",
            },
            {
              text: "Returns",
              url: "/returns",
            },
            {
              text: "Student Discount",
              url: "/student-discount",
            },
          ]}
        />
        <LinkAccordion
          header="About Us"
          links={[
            {
              text: "About Us",
              url: "/about",
            },
            {
              text: "Join Us",
              url: "/careers",
            },
            {
              text: "Sustainability",
              url: "/sustainability",
            },
          ]}
        />
      </div>
      <div className="copyright-footer">
        <span className="copyright-text">
          ©Golden Shoes Ltd. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
