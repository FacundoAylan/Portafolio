import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './Component/1-NavBar/NavBar';
import HomePage from './Component/2-HomePage/HomePage';
import Project from './Component/3-Projects/Projects';
import Skills from './Component/4-Skills/Skills';
import NotFound from  './Component/5-NotFound/NotFound';
import './index.css';

const App = () => {
  const location = useLocation();
  const showNavBar = ['/', '/Project', '/Skills'];

  return (
    <div>
      {showNavBar.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </div>
  );
};

export default App;
