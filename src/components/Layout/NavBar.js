import React from "react";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/About">About page</Link>
        </li>
        <li>
          <Link to="/Recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/Tags">Tags</Link>
        </li>
        <li>
          <Link to="/Contact">Contact page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
