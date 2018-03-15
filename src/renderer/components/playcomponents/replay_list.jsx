import React, { Component } from 'react';
import { Link,hashHistory } from "react-router";
import axios from 'axios';
import Navi from "../../nav/nav";
import Replay_file from "./replay_file";

let url='http://192.168.10.179/replay_list.php';
let programurl='http://192.168.10.179/replay_file.php';

export default class Replay_list extends Component {
  constructor(props){
    super(props);
    this.state = {
      program_list:[],
      datas:[],
      value: '21',
      options: [
        {
          name: '1라디오',
          value: '21',
        },
        {
          name: '2라디오',
          value: '22',
        },
        {
          name: '3라디오',
          value: '23',
        },
        {
          name: '1FM',
          value: '24',
        },
        {
          name: '2FM',
          value: '25',
        },
      ],
    }
    this.getprogramID(this.state.value);
    this.handleClick=this.handleClick.bind(this);
  }



  getprogramID(a){
      this.setState({value:a});
      axios.get(url+"?channel_code="+a)
       .then(response => this.setState({program_list:response.data.data}));

  }

  getUrl(a){
      axios.get(programurl+"?program_code="+a)
          .then(response => this.setState({datas:response.data.data}));

  }


  handleClick(e){
    this.getUrl(e.target.id);
  }

  render() {

    const createItem = (item, key) =>
     <option
       key={key}
       value={item.value}>
       {item.name}
     </option>;

    return (
      <div className="pane-group">
        <div className="pane-sm sidebar"><Navi /></div>
        <div className="pane">

        <select
          onChange={event => this.getprogramID(event.target.value)}
          value={this.state.value}>
          {this.state.options.map(createItem)}
        </select>

          <ul className="list-group" >
            {this.state.program_list.map((list,i) =>
                <li key={i} onClick={this.handleClick} id={list.program_code} className="list-group-item"  >
                <img className="img-circle media-object pull-left" src={list.image_w}  width="100" height="100" />
                <div className="media-body" >
                  <p>{list.program_title}</p>
                </div>
                </li>
            )}
            </ul>

        </div>
        {this.state.datas !='' ?<div className="pane"><Replay_file datas={this.state.datas} /></div>:null}
      </div>
    );
  }

}
