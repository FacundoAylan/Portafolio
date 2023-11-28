import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './Component/1-NavBar/NavBar';
import HomePage from './Component/2-HomePage/HomePage';
import Project from './Component/3-Projects/Projects';
import Skills from './Component/4-Skills/Skills';
import NotFound from  './Component/5-NotFound/NotFound';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.css';

const App = () => {
  const location = useLocation();
  const showNavBar = ['/', '/Project', '/Skills'];

  return (
    <TransitionGroup className="transition-group">
      {showNavBar.includes(location.pathname) && <NavBar />}
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;