import React from 'react'
import ErrorDemoChildren from './ErrorDemoChildren'
import ErrorBoundary from '../classcomp/ErrorBoundary'

const ErrorDemo = () => {
  return (
    <div>
                <ErrorBoundary>
                  <ErrorDemoChildren name="Atul"></ErrorDemoChildren> 
                </ErrorBoundary>
                <ErrorBoundary> <ErrorDemoChildren name="Priya"></ErrorDemoChildren></ErrorBoundary>
                <ErrorDemoChildren name="Harshita"></ErrorDemoChildren>
                <ErrorBoundary>
                <ErrorDemoChildren name="Joker"></ErrorDemoChildren></ErrorBoundary>
                <ErrorDemoChildren name="Amit"></ErrorDemoChildren>
       

    </div>
  )
}

export default ErrorDemo
