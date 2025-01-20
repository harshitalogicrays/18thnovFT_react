import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
  constructor(props) {
    super(props)
    console.log("constructor called")
    this.state = {count:1 , color:this.props.color }
    this.interval =''
  }
  
  static getDerivedStateFromProps(nextState,prevState){
    console.log("getDerivedStateFromProps called")
    if(prevState !== nextState)
      return {nextState}
    else return null
  }

componentDidMount(){
  console.log("componentDidMount called")
  this.interval = setInterval(() => {
    console.log("Interval called!");
  this.setState({count:this.state.count+1})
}, 2000);
}

componentWillUnmount(){
  console.log("componentwillUnmount called")
  clearInterval(this.interval)
}
shouldComponentUpdate(nextProps,nextState){
  console.log("shouldComponentUpdate called")
  if(nextState.count <= 10)
    return true 
else  return false
}
getSnapshotBeforeUpdate(propsProps,prevState){
  console.log("getSnapshotBeforeUpdate",prevState)
}

componentDidUpdate(prevProps,prevState){
  console.log("componentDidUpdate called")
  console.log(prevState);
  console.log(this.state); 
}

  render() {
    console.log("render called")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h2 style={{color:this.state.color}}>{this.state.color}</h2>
        <button type="button" onClick={()=>this.setState({color:"blue"})}>change color</button>
      </div>
    )
  }
}
