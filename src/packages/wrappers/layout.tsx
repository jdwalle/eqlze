import React from 'react';
import { NavBar } from '../components/navbar';

import './layout.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <NavBar />
      <main className="main-content">{children}</main>
    </>
  );
};

export default Layout;
