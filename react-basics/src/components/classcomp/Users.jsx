import axios from 'axios'
import React, { Component } from 'react'

export default class Users extends Component {
    constructor(props) {
      super(props)  
      this.state = {data:[] }
    }
    
    // getData = ()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res=>{
    //         console.log(res)            
    //         return res.json()})
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(err=>console.log(err))
    // }

    // getData = async()=>{
    //     try{
    //        const res =  await fetch("https://jsonplaceholder.typicode.com/users")
    //        const data =  await res.json()
    //        console.log(data)
    //     }
    //     catch(err){console.log(err)}
    // }

    // getData = ()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>{
    //         console.log(res.data)
    //     })
    //     .catch(err=>console.log(err))
    // }

    getData = async()=>{
        try{
            let res = await axios.get("https://jsonplaceholder.typicode.com/users")
            // console.log(res.data)
            this.setState({data:res.data}) //data:[{},{}]
        }
        catch(err){console.log(err)}
    }
    componentDidMount(){  this.getData() }

  render() {
    return (
      <div>
        <h1>Users Data</h1>

        {/* {JSON.stringify(this.state.data)} */}

            <div class="table-responsive" >
                <table class="table table-bordered table-striped table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.length==0 && <tr><td colSpan={5}>No User Found</td></tr>}
                        {this.state.data.map((d ,i) =>
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{d.name}</td>
                            <td>{d.username}</td>
                            <td>{d.email}</td>
                            <td>{d.phone}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            

      </div>
    )
  }
}
