import React from 'react';

import Bootstrap from 'bootstrap-webpack';
import CSS from './searchbox.css';

export default class extends React.Component {
  render() {
    return (
      <div id="searchbox" className="inner-addon right-addon">
          <i id="searchbox-glyph" className="glyphicon glyphicon-search"></i>
          <input id="searchbox-input" type="text" className="form-control" placeholder="Search this playlist" />
      </div>
    );
  }
}
