import React from 'react';
import FontAwesome from 'font-awesome-webpack';
import CSS from '../controls.css';

export default class extends React.Component {
  render() {
    return (
      <div className="previous-button">
        <i className="fa fa-step-backward fa-3x"></i>
      </div>
    );
  }
}
