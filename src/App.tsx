import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ComingSoon } from './packages/pages/coming-soon/coming-soon';
import { Home } from './packages/pages/home/home';
import { Faq } from './packages/pages/faq/faq';
import Layout from './packages/wrappers/layout/layout';

const App = () => (
  <div>
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/" element={<ComingSoon />} />
        </Routes>
      </Layout>
    </Router>
  </div>
);

export default App;
