import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navigation = () => (
  <header className="header">
    <nav className="nav">
      <NavLink className="navlink" to="/">Bookstore CMS</NavLink>
      <ul className="nav">
        <li className="navlist">
          <NavLink className="navlink" to="/">BOOKS</NavLink>
        </li>
        <li className="navlist">
          <NavLink className="navlink" to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
