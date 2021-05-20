import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/articles-list">Articles</Link>
          </li>
          <li>
            <Link to="/article/:name">Article-Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
