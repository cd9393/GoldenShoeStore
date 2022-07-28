import { useState, useEffect } from "react";
import "./LinkAccordion.css";

const LinkAccordion = ({ header, links }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [screenWidth, setScreenwidth] = useState(window.innerWidth);

  const breakPoint = 700;

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenwidth(window.innerWidth);
      if (window.innerWidth > breakPoint) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const toggleOpen = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="accordion-container" onClick={toggleOpen}>
      <h4 className="accordion-header">{header}</h4>
      {(screenWidth > breakPoint || isExpanded) && (
        <ul className="accordion-list">
          {links.map((link) => (
            <li key={link.text}>
              <a className="accordion-link" href={link.url}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LinkAccordion;
