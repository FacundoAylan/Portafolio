import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Component/1-NavBar/NavBar';
import HomePage from './Component/2-HomePage/HomePage';
import Project from './Component/3-Projects/Projects';
import Contact from './Component/4-Contact/Contact';
import './index.css';

const App = () => {
  return (
    <div className='container-app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
