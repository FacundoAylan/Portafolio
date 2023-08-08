import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './Component/1-NavBar/NavBar';
import HomePage from './Component/2-HomePage/HomePage';
import Project from './Component/3-Projects/Projects';
import Contact from './Component/4-Contact/Contact';
import NotFound from './Component/5-NotFound/NotFound';

const App = () => {
  const location = useLocation();
  const showNavBar = ['/', '/project', '/contact'];

  return (
    <div>
      {showNavBar.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
