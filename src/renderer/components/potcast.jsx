import React, { Component } from 'react';
import { Link,hashHistory } from "react-router";
import axios from 'axios';
import Navi from "../nav/nav";

let url='http://192.168.10.179/potcast.php';

export default class Potcast extends Component {
  constructor(props){
    super(props);
    this.state = {
      datas:[],
      isMounted: false
    }

  }


  getPotcast(){
    if (this.state.isMounted) {
      axios.get(url)
       .then(response => this.setState({datas:response.data.data}));
    }
  }
  componentDidMount() {
      this.setState({isMounted: true})
  }
  componentWillUnmount(){
      this.setState({isMounted: false})
  }


  render() {
    this.getPotcast();

    return (
      <div className="pane-group">
        <div className="pane-sm sidebar"><Navi /></div>
        <div className="pane">

          <ul className="list-group" >
            {this.state.datas.map((list,i) =>
                <li key={i} className="list-group-item"  >
                <img className="img-circle media-object pull-left" src={list.image_o}  width="100" height="100" />
                <div className="media-body" >
                  <p>{list.title}</p>
                  <a href={list.play_url} download> 다운로드 </a>
                </div>
                </li>
            )}
            </ul>

        </div>
      </div>
    );
  }

}
