import React, { Suspense } from 'react'
// import LazyChildren from './LazyChildren'

const LazyChildren = React.lazy(()=>import('./LazyChildren'))
const LazyLoading = () => {
  return (
    <div>
      <h1>Lazy Loading Demo</h1>
      <Suspense fallback="Loading...">
           <LazyChildren/>
      </Suspense>
      
    </div>
  )
}

export default LazyLoading

