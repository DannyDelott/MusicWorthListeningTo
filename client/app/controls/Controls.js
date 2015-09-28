import React from 'react';

import CSS from './controls.css';
import PlayButton from './player-controls/PlayButton.js';
import NextButton from './player-controls/NextButton.js';
import PreviousButton from './player-controls/PreviousButton.js';
import ShuffleButton from './player-controls/ShuffleButton.js';
import SearchBox from './search-box/SearchBox.js';

export default class extends React.Component {
  render() {
    return (
      <div id="controls">
        <div id="player-controls">
          <PlayButton />
          <PreviousButton />
          <NextButton />
          <ShuffleButton />
        </div>
          <SearchBox />
      </div>
    );
  }
}
