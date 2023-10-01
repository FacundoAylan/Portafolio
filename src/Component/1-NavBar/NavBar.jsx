import React from 'react';
import { FaHome, FaBriefcase, FaCode } from 'react-icons/fa';
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
            className={({ isActive }) => (isActive ? 'active-navbar' : 'disable')}
          >
            <FaHome className="icons" />
          </NavLink>
        </button>
      </div>
      <div className="Container-button">
        <button className="Home">
          <div className="Tooltip-home">Projects</div>
          <NavLink
            to="/Project"
            className={({ isActive }) => (isActive ? 'active-navbar' : 'disable')}
          >
            <FaBriefcase className="icons" />
          </NavLink>
        </button>
      </div>
      <div className="Container-button">
        <button className="Home">
          <div className="Tooltip-home">Skill</div>
          <NavLink
            to="/Skills"
            className={({ isActive }) => (isActive ? 'active-navbar' : 'disable')}
          >
            <FaCode className="icons" />
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
