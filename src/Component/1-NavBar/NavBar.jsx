import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const NavBar = () => {
  return (
    <div className="Container_navbar">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'disable')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : 'disable')}
        >
          About
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? 'active' : 'disable')}
        >
          Skills
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) => (isActive ? 'active' : 'disable')}
        >
          Project
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : 'disable')}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
