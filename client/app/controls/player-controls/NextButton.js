import React from 'react';
import FontAwesome from 'font-awesome-webpack';
import CSS from '../controls.css';

export default class extends React.Component {
  render() {
    return (
      <div className="next-button">
        <i className="fa fa-step-forward fa-3x"></i>
      </div>
    );
  }
}
