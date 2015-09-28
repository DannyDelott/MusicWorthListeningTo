import React from 'react';
import FontAwesome from 'font-awesome-webpack';
import CSS from '../controls.css';

export default class extends React.Component {

  constructor(){
    super();
    this.render = this.render.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);

    this.state = {
      shuffle: false
    }
  }

  toggleShuffle() {
    this.setState({
      shuffle: !this.state.shuffle
    });
  }

  render() {
    var classString = 'fa fa-random fa-3x';
    if(this.state.shuffle){
      classString += ' shuffle';
    }
    return (
      <div className="shuffle-button" onClick={ this.toggleShuffle }>
        <i className={ classString }></i>
      </div>
    );
  }

}

