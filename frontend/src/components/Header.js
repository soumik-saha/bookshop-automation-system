// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

function Header() {
  return (
    <header className="header">
      <h1>Bookstore</h1>
      <nav>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
