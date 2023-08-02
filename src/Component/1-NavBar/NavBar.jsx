import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import './index.css';

const NavBar = () => {
  return (
    <div className='Container_navbar'>
      <div className='Container-button'>
        <button className='Home'>
        <div className="Tooltip-home">Home</div>
          <Link to='/'>
            <FaHome className='icons' />
          </Link>
        </button>
      </div>
      <div className='Container-button'>
        <button className='Home'>
        <div className="Tooltip-home">Projects</div>
          <Link to='/'>
            <FaBriefcase className='icons'/>
          </Link>
        </button>
      </div>
      <div className='Container-button'>
        <button className='Home'>
        <div className="Tooltip-home">Contact</div>
          <Link to='/'>
            <FaEnvelope className='icons'/>
          </Link>
        </button>
      </div>
    </div>
  )
};

export default NavBar;