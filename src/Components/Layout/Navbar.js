import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  // for class components
  // static defaultProps = {
  //   title: "Github Finder",
  //   icon: "fab fa-github",
  // };

  // //this is used when we props as array or objes from app component insted if string array we need
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   icon: PropTypes.string.isRequired,
  // };

  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About </Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

//this is used when we props as array or objes from app component insted if string array we need
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
