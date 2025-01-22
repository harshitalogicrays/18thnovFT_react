import React from 'react'

const ErrorFallback = ({fallback}) => {
  return (
    <div>
      <h1>Invalid Data</h1>
      {fallback}
    </div>
  )
}

export default ErrorFallback
