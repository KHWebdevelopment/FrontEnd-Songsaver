import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-us">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
