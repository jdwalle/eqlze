import React from 'react';
import { Navbar, Switch, Link } from '@nextui-org/react';
import { LogoSVG } from '../../content/logo';
import './navbar.scss';

export const NavBar = () => {
  const collapseItems = ['About', 'How it Works?', 'Contact'];
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
        <Navbar.Link href="#About">About</Navbar.Link>
        <Navbar.Link href="#How it Works?">How it Works?</Navbar.Link>
        <Navbar.Link href="#Contact">Contact</Navbar.Link>
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
              href={`#${item}`}
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
