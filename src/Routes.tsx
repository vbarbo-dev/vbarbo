import React from 'react';
import { BrowserRouter as Router, Route, Routes as RoutedRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Links from './pages/Links';

const Routes: React.FC = () => {
  return (
    <Router>
      <RoutedRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </RoutedRoutes>
    </Router>
  );
};

export default Routes;

