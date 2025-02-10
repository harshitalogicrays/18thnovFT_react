import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, selectUsers } from './userSlice'

const UsersList = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers("https://jsonplaceholder.typicode.com/users"))
    },[])
    const users = useSelector(selectUsers)
  return (
    <div>
      {users.length==0 && <h1>No User Found</h1>}
      {users.map((user,index)=><h1 key={index}>{user.name}</h1>)}
    </div>
  )
}

export default UsersList
