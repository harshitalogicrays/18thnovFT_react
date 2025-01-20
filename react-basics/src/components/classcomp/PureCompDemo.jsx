import React, { Component, PureComponent } from 'react'

export default class PureCompDemo extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"Ram"
    }
  }
  handleChange=()=>{
    console.log("handlchange called")
    this.setState({name:"Meera"})
  }
  
  render() {
    console.log("render called");
    
    return (
      <div>
        <button type="button" onClick={this.handleChange}>change Name</button>
          <h1>{this.state.name}</h1>
      </div>
    )
  }
}
