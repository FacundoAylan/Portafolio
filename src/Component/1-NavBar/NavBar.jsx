import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const NavBar = () => {
  return (
    <div className='Container_navbar'>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/project'>Project</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
};

export default NavBar;