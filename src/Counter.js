import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
      this.state = {
      count: 1
    }
  }
  // count: Object
increment(){
  console.log('clicked!!!')
  this.setState({
    count: this.state.count + 1
  })
}


  render(){
    return(
    <div>
      <h1>{this.state.count}</h1>
      <button onClick={ () => this.increment () }>Add</button>
    </div>
    )
  }
}

// this.increment.



export default Counter;
