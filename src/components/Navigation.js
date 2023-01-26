import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import profile from '../assets/profile.png';

const Navigation = () => {
  const [BookActiveLink, setBookActiveLink] = useState(false);
  const [categoryActiveLink, setCategoryActiveLink] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setBookActiveLink(true);
      setCategoryActiveLink(false);
    }
    if (path === '/categories') {
      setBookActiveLink(false);
      setCategoryActiveLink(true);
    }
  }, [location]);

  return (
    <header>
      <nav className="nav-bar">
        <NavLink id="logo" to="/">Bookstore CMS</NavLink>
        <ul className="nav-links">
          <li className="navlist">
            <NavLink className={BookActiveLink ? 'activelink navlink' : 'navlink'} to="/">BOOKS</NavLink>
          </li>
          <li className="navlist">
            <NavLink className={categoryActiveLink ? 'activelink navlink' : 'navlink'} to="/categories">CATEGORIES</NavLink>
          </li>
        </ul>
        <button type="button" className="icon-button"><img src={profile} alt="profile" /></button>
      </nav>
    </header>
  );
};

export default Navigation;
