import React, { Component } from 'react';
import { Link,hashHistory } from "react-router";
import axios from 'axios';



export default class Schedule extends Component {
  constructor(){
    super();
    this.state = {
      program_id:'',
      title:'',
      image:'',
    }
    this.getprogramID();
  }

  getprogramID(a){
     url += ("?mediaurl="+a);
     axios.get(url)
      .then(response => this.setState({program_id:response.data.data[0].program_id, title:response.data.data[0].program_title,
      image:response.data.data[0].master_trans_images[0].imgurl}));

      url='http://192.168.10.179/replay_file.php';
  }

  render() {
    return (
      <img src={this.state.image} height="200" width="200"/>
    );
  }
}
