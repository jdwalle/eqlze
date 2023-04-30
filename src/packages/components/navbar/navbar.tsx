import React from 'react';
import { Navbar, Switch, Link } from '@nextui-org/react';
import { LogoSVG } from '../../content/logo';
import './navbar.scss';

export const NavBar = () => {
  const collapseItems = ['About', 'How it Works?', 'FAQ', 'Contact'];
  return (
    <Navbar className="navbar" variant="floating">
      <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
      <Navbar.Brand>
        <LogoSVG />
      </Navbar.Brand>
      <Navbar.Content
        hideIn="xs"
        enableCursorHighlight
        variant="highlight-rounded"
      >
        <Navbar.Link href="#about">About</Navbar.Link>
        <Navbar.Link href="#howitworks">How it Works?</Navbar.Link>
        <Navbar.Link href="#">FAQ</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Content>
      {/* <Navbar.Content>
        <Switch shadow color="primary" checked />
      </Navbar.Content> */}
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="#sdf"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
