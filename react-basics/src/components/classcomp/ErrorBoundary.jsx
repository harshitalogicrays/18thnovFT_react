import React, { Component } from 'react'
import ErrorFallback from './ErrorFallback';

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
          // return <h1>{this.state.errormsg}</h1>;
          return <ErrorFallback fallback={this.state.errormsg}/>
        }
    
        return this.props.children; 
      }
  }
