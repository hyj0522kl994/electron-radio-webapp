import React from "react";

export default class Config extends React.Component{
  constructor(props) {
    super(props);
    this.state={
    url:'http://192.168.10.179/',
    urlLive:'http://192.168.10.179/live.php',
    urlStreaming:'http://192.168.10.179/streaming.php',
    urlLiveCDN:'http://192.168.10.179/livecdn.php',
    urlReplayList:'http://192.168.10.179/replay_list.php',
    urlReplayFile:'http://192.168.10.179/replay_file.php',
    urlReplayCDN:'http://192.168.10.179/replaycdn.php'
  }
  }
}
