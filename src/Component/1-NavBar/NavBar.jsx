import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './index.css';

const NavBar = () => {
  return (
    <div className="Container_navbar">
      <div className="Container-button">
        <button className="Home">
          <div className="Tooltip-home">Home</div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : 'disable')}
          >
            <FaHome className="icons" />
          </NavLink>
        </button>
      </div>
      <div className="Container-button">
        <button className="Home">
          <div className="Tooltip-home">Projects</div>
          <NavLink
            to="/project"
            className={({ isActive }) => (isActive ? 'active' : 'disable')}
          >
            <FaBriefcase className="icons" />
          </NavLink>
        </button>
      </div>
      <div className="Container-button">
        <button className="Home">
          <div className="Tooltip-home">Contact</div>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : 'disable')}
          >
            <FaEnvelope className="icons" />
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
