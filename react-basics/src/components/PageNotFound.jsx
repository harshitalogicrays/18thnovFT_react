import React from 'react'
import errm from './PageNotFound.module.css'
const PageNotFound = () => {
  return (
    <div className={errm.error}>
        <h1 className='text-center'>404</h1>
        <h2>Page Not Found</h2>
    </div>
  )
}

export default PageNotFound
