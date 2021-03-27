import React, { Component } from 'react';
import {inject,observer} from "mobx-react";
import moment from 'moment-timezone';

@inject("store")
@observer
class App extends Component {

  constructor (props) {
    super(props);
    this.handleTimeZoneChange = this.handleTimeZoneChange.bind(this);
    moment.tz.setDefault("Asia/Chongqing");
  }

  render() {
    const {store} = this.props;

    return (
      <div className='App'>
        <div>{store.clock.currentTime}</div>
        <label htmlFor="timeZone-select">时区选择</label>
        <select 
          name="timeZone" 
          id="timeZone-select" 
          onChange={this.handleTimeZoneChange}
        >
          { moment.tz.names().map((item, index) => 
            item === 'Asia/Chongqing' ? 
              <option value={item} key={index} selected="selected">{item}</option> 
            :
              <option value={item} key={index}>{item}</option>
          )}
        </select>
      </div>
    );
  }

  componentDidMount () {
    setInterval(() => {
      this.props.store.clock.updateCurrentTime();
    }, 1000);
  }

  handleTimeZoneChange (e) {
    const selectedTimeZone = e.target.value;
    this.props.store.clock.updateTimeZone(selectedTimeZone);
  }
}

export default App;
