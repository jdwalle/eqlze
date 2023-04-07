import React from 'react';
import './App.scss';
import { Text } from '@nextui-org/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        </div>
      </header>
    </div>
  );
}

export default App;
