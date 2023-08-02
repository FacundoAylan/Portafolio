import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Component/1-NavBar/NavBar';
import HomePage from './Component/2-HomePage/HomePage';
import Project from './Component/3-Projects/Projects';
import Contact from './Component/4-Contact/Contact';

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <NavBar/>
      </BrowserRouter>
  )
}

export default App;
