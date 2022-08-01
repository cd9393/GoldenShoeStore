import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faBookmark,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const breakPoint = 700;

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [screenWidth, setScreenwidth] = useState(window.innerWidth);

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

  const toggleNav = () => {
    setIsExpanded((prevState) => !prevState);
  };
  return (
    <>
      <nav className="navbar">
        <div className="unopen-container">
          {(isExpanded || screenWidth > breakPoint) && (
            <ul id="navigation-list" className="navigation-list">
              <li>
                <div className="close-sidebar">
                  <button
                    className="mobile-nav-toggle"
                    aria-label="Close Menu"
                    aria-controls="navigation-list"
                    aria-expanded={isExpanded} // need to toggle this true/false when nav is open
                    onClick={toggleNav}
                  >
                    <FontAwesomeIcon className="menu-icon" icon={faX} />
                  </button>
                </div>
              </li>
              <li className="list-item">
                <Link className="link" to="/women">
                  Women
                </Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/men">
                  Men
                </Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/kids">
                  Kids
                </Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/brands">
                  Brands
                </Link>
              </li>
            </ul>
          )}
          <Link className="link" to="/">
            <h2>Golden Shoes</h2>
          </Link>
          <div className="icon-container">
            <Link className="link" to="/account">
              <FontAwesomeIcon className="menu-icon" icon={faUser} />
            </Link>
            <FontAwesomeIcon className="menu-icon" icon={faBookmark} />
            <FontAwesomeIcon className="menu-icon" icon={faBagShopping} />
            <button
              className="mobile-nav-toggle"
              aria-label="Menu"
              aria-controls="navigation-list"
              aria-expanded={isExpanded} // need to toggle this true/false when nav is open
              onClick={toggleNav}
            >
              <FontAwesomeIcon className="menu-icon" icon={faBars} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
