import React from 'react';

import Bootstrap from 'bootstrap-webpack';
import CSS from './player.css';

export default class extends React.Component {
  render() {
    return (
      <div id="player">
        <iframe width="200" height="150" src="https://www.youtube.com/embed/bX0RhmpKZBg?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}
