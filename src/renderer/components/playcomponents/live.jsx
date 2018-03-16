import React, { Component} from 'react';
import { Link,hashHistory } from "react-router";
import axios from 'axios';
import Streaming from './streaming';
import Rooms from '../../rooms';
import config from "../../config";

let url=config.urlLive;
let mediaurl=config.urlStreaming;
let finalmediaurl=config.urlLiveCDN;

export default class Live extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      radiodata:[],
      posterimage:'',
      FM:''
    }
      this.getprogramID();
      this.onClickButton= this.onClickButton.bind(this);

  }

    getprogramID(){
        axios.get(url)
         .then(response => this.setState({radiodata:response.data.data}));
    }


    onClickButton(e){
        this.setState({posterimage:e.target.value});
        axios.get(mediaurl+"?channel_code="+e.target.id)
         .then(response =>
          axios.get(finalmediaurl+"?mediaurl="+response.data.data[0].streamming_items[0].service_url)
            .then(res => this.setState({FM:res.data}))
        );
    }



    render() {
      return (
        <div className='liveList'>
        <ul className="list-group" >
        {this.state.posterimage !='' ? <Streaming FM={this.state.FM} posterimage={this.state.posterimage} /> :null}
        {this.state.radiodata.map((posts,i) =>
          <li key={i} className="list-group-item"  >
          {posts.program_ch_code < 26 ? <img className="img-circle media-object pull-left" src={posts.image_w}  width="150" height="150" /> : null}
            <div className="media-body">
              {posts.program_ch_code < 26 ? <strong>{posts.program_ch}</strong> : null}
              {posts.program_ch_code < 26 ? <p>{posts.program_title}</p> : null}
              {posts.program_ch_code < 26 ? <button value={posts.image_w} id={posts.program_ch_code} onClick={this.onClickButton}>듣기</button>: null}
            </div>
          </li>
        )}
        </ul>
      </div>

      );
    }
}
