import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import profile from '../assets/profile.png';

const Navigation = () => (
  <header>
    <nav className="nav-bar">
      <NavLink id="logo" to="/">Bookstore CMS</NavLink>
      <ul className="nav-links">
        <li className="navlist">
          <NavLink className="navlink" to="/">BOOKS</NavLink>
        </li>
        <li className="navlist">
          <NavLink className="navlink" to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
      <button type="button" className="icon-button"><img src={profile} alt="profile" /></button>
    </nav>
  </header>
);

export default Navigation;
