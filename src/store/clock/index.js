import { observable, action } from "mobx";
import moment from 'moment-timezone';

class Clock {
  @observable 
  timeZone = 'Asia/Chongqing';

  @observable
  currentTime = moment().tz('Asia/Chongqing').format();
  
  @action 
  updateTimeZone = (newTimeZone) => {
    // 更改数据
    this.timeZone = newTimeZone;
  }

  @action
  updateCurrentTime = () => {
    this.currentTime = moment().tz(this.timeZone).format();
  }
}

export default new Clock();