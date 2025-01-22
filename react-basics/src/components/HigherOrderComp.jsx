import axios from 'axios'
import React, { Component } from 'react'

const HigherOrderComp = (WrappedComp , inputdata) => {
    //inputdata = {url:"",columns:['name','email'....],title:""}
  return class extends Component{
    constructor(props) {
        super(props)  
        this.state = {data:[] }
      }
      getData = async()=>{
        try{
            let res = await axios.get(inputdata.url)
            console.log(res)
            this.setState({data:res.data}) 
        }
        catch(err){console.log(err)}
    }
    componentDidMount(){  this.getData() }
    render(){
        return(
        <>
            <WrappedComp title={inputdata.title} data={this.state.data} columns={inputdata.columns}/>
        </> )
    }
  } 
}

export default HigherOrderComp
