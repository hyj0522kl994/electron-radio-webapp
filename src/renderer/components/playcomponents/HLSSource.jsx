import React, { PropTypes, Component } from 'react';
import Hls from 'hls.js';



export default class HLSSource extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={src:''}
    this.hls = new Hls();
  }



  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.state.src) {
      this.setState({ src: nextProps.src });
      if (Hls.isSupported()) {
        this.hls.loadSource(nextProps.src);
        this.hls.attachMedia(nextProps.video);
        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play();
        });
      }
    }
  }

  render() {
    return (
      <source
        src={this.state.src}
        type={this.props.type || 'application/x-mpegURL'}
      />

    );
  }

}
