import React from 'react';

import normalize from 'normalize.css';
import CSS from './app.css';

import Logo from './logo/Logo.js';
import Controls from './controls/Controls.js';
import Player from './player/Player.js';

export default class extends React.Component {
  render() {
    return (
      <div id="app">
        <Logo />
        <Controls />
      </div>
    );
  }
}
