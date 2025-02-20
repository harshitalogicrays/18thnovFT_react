import React from 'react'

const PageNotFound = () => {
  const styles = {
    color:"red",
    textAlign:"center",
    position:"fixed",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    fontSize:'30px',
    fontWeight:'bold'
  }
  return (
    <div style={styles}>
        <h1>404 Not Found</h1>
        <h2>Page Not Found</h2>
    </div>
  )
}

export default PageNotFound
