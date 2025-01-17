import React, { Component } from 'react'

export default class PropsDemo1 extends Component {
  render() {
    let {mobile} = this.props
    return (
      <>
        <h1>Props</h1>
        <h3>{mobile}</h3>
        <h2>{this.props.username}</h2>
        {this.props.isActive ? <>{this.props.username} is active </> : "User is not active"}

        <h4>{this.props.children}</h4>
      </>
    )
  }
}

PropsDemo1.defaultProps = {
    username:"Ram"
}