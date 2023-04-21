import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ComingSoon } from './packages/pages/coming-soon/coming-soon';
import Layout from './packages/wrappers/layout/layout';

const App = () => (
  <div>
    <Router>
      <Layout>
        <Routes>
          {/* <Route path={'/AboutUs'} component={AboutUs}></Route> */}
          {/* <Route path={'/home'} component={home}></Route> */}
          <Route path="/" element={<ComingSoon />} />
        </Routes>
      </Layout>
    </Router>
  </div>
);

export default App;
