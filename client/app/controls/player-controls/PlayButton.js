import React from 'react';
import FontAwesome from 'font-awesome-webpack';
import CSS from '../controls.css';

export default class extends React.Component {

  constructor(){
    super();
    this.render = this.render.bind(this);
    this.togglePlay = this.togglePlay.bind(this);

    this.state = {
      isPlaying: false
    }
  }

  togglePlay() {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  }

  render() {
    return (
      <div className="play-button" onClick={ this.togglePlay }>
      {this.state.isPlaying ? this.renderPlaying() : this.renderNotPlaying() }
      </div>
    );
  }

  renderPlaying() {
    return <i className="fa fa-pause fa-3x"></i>;
  }

  renderNotPlaying() {
    return <i className="fa fa-play fa-3x"></i>;
  }
}
