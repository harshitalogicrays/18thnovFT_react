import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false,errormsg:"" };
      }
    
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    
      componentDidCatch(error) {
        this.setState({errormsg:error.message})
        console.log(error);
      }
    
      render() {
        if (this.state.hasError) {
          return <h1>{this.state.errormsg}</h1>;
        }
    
        return this.props.children; 
      }
  }
