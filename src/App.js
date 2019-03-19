import React, { Component } from 'react';
import {inject,observer} from "mobx-react"



@inject("store")

@observer
class App extends Component {
  render() {
    let {store} = this.props
    console.log(this)
    
    return (
      <div className="App">
       home数据： {store.home.name}
       <hr/>
       home-computed后数据： {store.home.otherName}
       <hr/>
       <button onClick={store.home.add.bind(this)}>更改home数据</button>
       <hr/>
       car数据： {store.car.age}
       <hr/>
        car-computed后数据： {store.car.douleAge}
       <hr/>
       <button onClick={store.car.add.bind(this)}>更改car数据</button>
      </div>
    );
  }
}

export default App;
