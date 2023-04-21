import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getDocumentTheme, NextUIProvider } from '@nextui-org/react';
import { Home } from './packages/pages/home/home';
import { Faq } from './packages/pages/faq/faq';
import { comingSoon } from './packages/content/constants';
import Layout from './packages/wrappers/layout/layout';
import { lightTheme, darkTheme } from './packages/content/theme';

const App = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    // you can use any storage
    const theme = window.localStorage.getItem('data-theme');
    setIsDark(theme === 'dark');

    const observer = new MutationObserver((mutation) => {
      const newTheme = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === 'dark');
    });

    // Observe the document theme changes
    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'style'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
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
    </NextUIProvider>
  );
};

export default App;
