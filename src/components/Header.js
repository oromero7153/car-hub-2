import React from "react";
import { Link } from "react-router-dom";
import './header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="PLACEHOLDER.jpg" alt="Car Hub Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rides">Rides</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
