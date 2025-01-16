import React from 'react'
import { MyContext1 } from '../ContextData';

const Home = () => {
  const condata  =  MyContext1()
  // console.log(condata); 
  return (<>
    <h1>Home Page</h1>
    <h2>{condata.name}</h2>
    <button type="button" className='btn btn-primary' onClick={()=>condata.changeName("Atul")}>change</button>
   </>
  )
}

export default Home
