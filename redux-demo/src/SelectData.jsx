import React from 'react'
import { useSelector } from 'react-redux'
import { selectUname } from './redux/authSlice'

const SelectData = () => {
    // const uname = useSelector((state)=>state.auth.username)
    const uname = useSelector(selectUname)
  return (
    <div>
      <h1>Welcome {uname || "Guest"}</h1>
    </div>
  )
}

export default SelectData
