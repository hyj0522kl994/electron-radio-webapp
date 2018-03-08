import React, { Component, PropTypes } from 'react';
import { Player, ControlBar, PlayToggle } from 'video-react';
import HLSSource from './HLSSource';



export default class Streaming extends React.Component {
  constructor(props){
    super(props);
    this.state={
      addre:''
    }

  }



  componentWillReceiveProps(nextProps) {
    if (nextProps.play_url !== this.state.addre) {
      this.setState({ addre: nextProps.play_url });
    }
  }

  render() {
    console.log(this.state.addre);
    return (
      <div>
        <Player ref="player" poster={this.props.posterimage}>
          {this.state.addre != ''? <HLSSource
            isVideoChild
            src= {this.state.addre} /> : null }
        </Player>
      </div>
    );
  }
}
