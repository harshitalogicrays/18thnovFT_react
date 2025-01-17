import React, { Component } from 'react'

export default class Stateandeventinclass extends Component {
    constructor(props) {
      super(props)
      this.state = {count:1,username:"ram" ,isActive:true}
    }
    handleAdd = ()=>{this.setState({username:"Atul" , isActive:!this.state.isActive}) }
    // handleAdd1 = (a,b)=>console.log(a+b)
    increase=()=>{  
      // this.setState({count:this.state.count+1})
      this.setState((prev)=>({count:prev.count+1}))  
  }
  render() {
    return (
      <>
        <>      <button type="button" className="btn btn-primary me-3" onClick={() => alert("button clicked")}
        > Button</button>

        <button type="button" className="btn btn-primary me-3" onClick={this.handleAdd}
        > Add </button>

        <button type="button" className="btn btn-primary me-3" onClick={() => this.handleAdd()}
        > Add </button>


        <button type="button" className="btn btn-primary me-3" onClick={() => this.handleAdd1(2, 3)}
        > Add </button>
       <br/> <h1>{this.state.username}</h1>
        </>

        <button type="button" className="btn btn-primary me-3 mt-3" onClick={this.increase}> Increase </button>
        <button type="button" class="btn btn-primary me-2 mt-3" onClick={()=>this.setState({count:this.state.count-1})}>Decrease</button>
        <button type="button" class="btn btn-primary me-2 mt-3" onClick={()=>this.setState({count:0})}>Reset</button>
        <button type="button" class="btn btn-primary me-2 mt-3" onClick={()=>this.setState({count:-this.state.count})}>change sign</button>
   
        <h1>Count: {this.state.count} </h1>

  </>
    )
  }
}
