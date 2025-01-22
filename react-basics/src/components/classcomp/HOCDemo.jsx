import React, { Component } from 'react'
import Users from './Users'
import HigherOrderComp from '../HigherOrderComp'
import WrappedComp from './WrappedComp'

const UsersList = HigherOrderComp(WrappedComp , {url:"https://jsonplaceholder.typicode.com/users",title:"Users Data",
  columns:["name","username","email","phone"]
}) 
const Posts = HigherOrderComp(WrappedComp , {url:"https://jsonplaceholder.typicode.com/posts",title:"Posts Data",
  columns:['userId','title','body']
}) 

export default class HOCDemo extends Component {
  render() {
    return (
      <div>
        {/* <Users/> */}
        <UsersList/>
        <hr/>
        <Posts/>
      </div>
    )
  }
}
