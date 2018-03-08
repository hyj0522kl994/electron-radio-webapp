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
    if (nextProps.FM !== this.state.addre) {
      this.setState({ addre: nextProps.FM });
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
          <ControlBar autoHide={false} disableDefaultControls={true} >
          <PlayToggle />
          </ControlBar>
        </Player>
      </div>
    );
  }
}
