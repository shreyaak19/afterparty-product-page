import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/our-story">Our Story</Link>
        </li>
        <li>
          <Link to="/order-history">Order History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;