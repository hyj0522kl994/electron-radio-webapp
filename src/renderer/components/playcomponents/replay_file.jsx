import React, { Component } from 'react';
import { Link,hashHistory } from "react-router";
import axios from 'axios';
import Details from './details';

let url='http://192.168.10.179/replaycdn.php';

const LINK_STYLE = {
  color: "inherit",
  textDecoration: "none"
};


export default class Replay_list extends React.Component {
  constructor(props){
    super(props);
    this.state={
      play_url:'',
      posterimage:''
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState({posterimage:e.target.name});
    if (e.target.id != ''){
      axios.get(url+"?mediaurl="+e.target.id)
       .then(response => this.setState({play_url:response.data}));
    }
  }


  render() {

  const { datas } = this.props;
    return (
      <div >
        <Link to={`/replay_list/${datas.title}`} style={LINK_STYLE}>
          <div className="media-body">
            {this.state.play_url !='' ? <Details play_url={this.state.play_url} posterimage={this.state.posterimage}/>:null}
            <ul className="list-group" >
              {datas.map((lists,i) =>
              <li key={i} onClick={this.handleClick} id={lists.play_url[0].media_url} name={lists.image_w} className="list-group-item" >
               <div className="media-body">
                <p>{lists.program_date}</p>
                <strong>{lists.title}</strong>
                <p>{lists.description}</p>
               </div>
              </li>
              )}
            </ul>
          </div>
        </Link>
      </div>
    );
  }
}
