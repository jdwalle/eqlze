import React from 'react';
import { NavBar } from '../../components/navbar/navbar';
import { ComingSoon } from '../../pages/coming-soon/coming-soon';

import './layout.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = (props: any) => {
  const { children, inMaintenance } = props;
  if (inMaintenance) {
    return <ComingSoon />;
  }
  return (
    <>
      <NavBar />
      <main className="main-content">{children}</main>
    </>
  );
};

export default Layout;
