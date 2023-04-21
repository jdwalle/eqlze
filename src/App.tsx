import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './packages/pages/home/home';
import { Faq } from './packages/pages/faq/faq';
import { comingSoon } from './packages/content/constants';
import Layout from './packages/wrappers/layout/layout';

const App = () => (
  <div>
    <Router>
      <Layout isComingSoon={comingSoon}>
        <Routes>
          {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Layout>
    </Router>
  </div>
);

export default App;
