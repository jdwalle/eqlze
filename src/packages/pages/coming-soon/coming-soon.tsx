import React from 'react';
import './coming-soon.scss';
import { Text, Switch, changeTheme, useTheme } from '@nextui-org/react';

export const ComingSoon = () => {
  const { type, isDark } = useTheme();

  const handleChange = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
    changeTheme(nextTheme);
  };

  return (
    <div className="Coming-Soon">
      <header>
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
          }}
          weight="bold"
        >
          EQLZE
        </Text>
        <div className="container">
          <div className="cube">
            <div className="sides">
              <div className="top" />
              <div className="right" />
              <div className="bottom" />
              <div className="left" />
              <div className="front" />
              <div className="back" />
            </div>
          </div>
          <div className="text">In Development</div>
          <Switch checked={isDark} onChange={handleChange} />
        </div>
      </header>
    </div>
  );
};
