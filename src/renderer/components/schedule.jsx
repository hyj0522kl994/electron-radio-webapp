import React, { Component } from 'react';
import { Link,hashHistory } from "react-router";
import axios from 'axios';
import Navi from "../nav/nav";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';

let url='http://192.168.10.179/schedule.php';

const calendar_style = {

    width:'100%',
    padding:'5px',
    textAlign:'center'
};

export default class Schedule extends Component {
  constructor(props){
    super(props);
    this.state = {
      datas:[],
      value: '21',
      selectedDay: moment().format('YYYYMMDD'),
      isMounted: false,
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

this.getSchedule(this.state.selectedDay,this.state.value);
  }

  componentDidMount() {
      this.setState({isMounted: true})
  }
  componentWillUnmount(){
      this.setState({isMounted: false})
  }



  getSchedule(a,b){
    if (this.state.isMounted) {
      axios.get(url+"?program_date="+a+"&channel_code="+b)
       .then(response => this.setState({datas:response.data.data}));
    }
  }
  getchannel(a){
    if (this.state.isMounted) {
      this.setState({value:a})
    }
  }
  render() {
    this.state.selectedDay ? this.getSchedule(this.state.selectedDay,this.state.value): null;
    const createlist = (item, key) =>
     <option
       key={key}
       value={item.value}>
       {item.name}
     </option>;

    return (
      <div className="pane-group">
        <div className="pane-sm sidebar"><Navi /></div>
        <div className="pane">
        <div style={calendar_style} >
          <select
            onChange={event => this.getchannel(event.target.value)}
            value={this.state.value}>
            {this.state.options.map(createlist)}
          </select>
          </div>
          <div style={calendar_style} >
          <DayPickerInput dayPickerProps={{ disabledDays: {after: new Date()} }} placeholder={moment().format('YYYY-M-D')} onDayChange={day => this.setState({selectedDay:moment(day).format('YYYYMMDD')}) } />
        </div>
        <div className="w3-container">
          <ul className="w3-ul w3-center" >
            {this.state.datas.map((list,i) =>
                <li key={i} >
                  <h4 >{list.program_title}</h4>
                  <p>{list.service_date.substring(0,4)+"."+list.service_date.substring(4,6)+"."+list.service_date.substring(6,8)}</p>
                  <p>{list.program_planned_start_time.substring(0,2)+":"+list.program_planned_start_time.substring(2,4)}
                  ~ {list.program_planned_end_time.substring(0,2)+":"+list.program_planned_end_time.substring(2,4)}</p>
                </li>
            )}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}
