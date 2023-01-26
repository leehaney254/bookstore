import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import profile from '../assets/profile.png';

const Navigation = () => (
  <header className="header">
    <nav className="nav">
      <NavLink id="logo" to="/">Bookstore CMS</NavLink>
      <ul className="nav">
        <li className="navlist">
          <NavLink className="navlink" to="/">BOOKS</NavLink>
        </li>
        <li className="navlist">
          <NavLink className="navlink" to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
    <button type="button" className="icon-button"><img src={profile} alt="profile" /></button>
  </header>
);

export default Navigation;
