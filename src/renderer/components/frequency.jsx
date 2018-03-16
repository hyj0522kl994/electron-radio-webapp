import React, { Component } from 'react';
import { Link,hashHistory } from "react-router";
import axios from 'axios';
import Navi from "../nav/nav";
import config from "../config";

let url=config.urlFrequency;

const Back_Style = {
  backgroundColor: 'gray',
  backgroundSize: 'cover',
};

const container_size = {
    width: '400px',
};


export default class Frequency extends Component {
  constructor(props){
    super(props);
    this.state = {
      datas:[],
      details:[]
    }
    this.handledetails=this.handledetails.bind(this);
  }


  getFrequency(){
    axios.get(url)
     .then(response => this.setState({datas:response.data.datas}));
  }

  handledetails(e){
    this.setState({details:this.state.datas[e.target.title]});
  }

  render() {
    this.getFrequency();
    const info=this.state.details;
    return (
      <div className="pane-group">
        <div className="pane-sm sidebar"><Navi /></div>
        <div className="pane" style={Back_Style}>


        <img src="./imagemap1.jpg" useMap="#image-map" />

        <map name="image-map">
            <area target="" alt="jeju" title={12}  coords="111,623,30" shape="circle" onClick={this.handledetails} />
            <area target="" alt="one" title={19} coords="434,580,41" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="pusan" title={5} coords="400,452,30" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="changwon" title={14} coords="326,436,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="jinju" title={13} coords="257,413,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="soonncheon" title={7} coords="189,459,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="mockpo" title={4} coords="91,499,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="gwangju" title={1} coords="128,434,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="jeonju" title={11} coords="165,370,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="daegu" title={2} coords="325,342,28" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="ulsan" title={9} coords="426,384,25" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="pohang" title={18} coords="415,318,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="daejeon" title={3} coords="202,303,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="cheongju" title={15} coords="176,238,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="andong" title={8} coords="335,257,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="chungju" title={17} coords="234,196,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="wonju" title={10} coords="299,167,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="gangrueng" title={0} coords="368,138,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="chuncheon" title={16} coords="251,115,24" shape="circle" onClick={this.handledetails}/>
            <area target="" alt="seoul" title={6} coords="159,137,38" shape="circle" onClick={this.handledetails}/>
        </map>
        </div>

        {info !="" ?
        <div className="pane-sm sidebar" style={container_size}>
        <h2>{info.areas}</h2>
        <ul className="list-group" >
        {info.fre_one.label !="" ? <li className="list-group-item" ><h4>{info.fre_one.label}</h4>
        <strong> {info.fre_one.fm != "" ? info.fre_one.fm+"FM (MHz)  ":null} {info.fre_one.am != "" ? info.fre_one.am+"AM (KHz)":null}</strong></li>: null}

        {info.fre_two.label !="" ? <li className="list-group-item" ><h4>{info.fre_two.label}</h4>
        <strong> {info.fre_two.fm != "" ? info.fre_two.fm+"FM (MHz)  ":null}  {info.fre_two.am != "" ? info.fre_two.am+"AM (KHz)":null}</strong></li>: null}

        {info.fre_three.label !="" ? <li className="list-group-item" ><h4>{info.fre_three.label}</h4>
        <strong> {info.fre_three.fm != "" ? info.fre_three.fm+"FM (MHz)  ":null}  {info.fre_three.am != "" ? info.fre_three.am+"AM (KHz)":null}</strong></li>:null}

        {info.fre_cool.label !="" ? <li className="list-group-item" ><h4>{info.fre_cool.label}</h4>
        <strong> {info.fre_cool.fm != "" ? info.fre_cool.fm+"FM (MHz)  ":null}  {info.fre_cool.am != "" ? info.fre_cool.am+"AM (KHz)":null}</strong></li>:null}

        {info.fre_music.label !="" ? <li className="list-group-item" ><h4>{info.fre_music.label}</h4>
        <strong> {info.fre_music.fm != "" ? info.fre_music.fm+"FM (MHz)  ":null}  {info.fre_music.am != "" ? info.fre_music.am+"AM (KHz)":null}</strong></li>: null}

        {info.fre_classic.label !="" ? <li className="list-group-item" ><h4>{info.fre_classic.label}</h4>
        <strong> {info.fre_classic.fm != "" ? info.fre_classic.fm+"FM (MHz)  ":null}  {info.fre_classic.am != "" ? info.fre_classic.am+"AM (KHz)":null}</strong></li> :null}
        </ul></div>
        : null}

      </div>
    );
  }


}
