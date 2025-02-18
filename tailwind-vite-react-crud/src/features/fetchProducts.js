import axios from "axios"

export const getData = async()=>{
    try{
     let res =  await fetch(`${import.meta.env.VITE_BASE_URL}/products`)
     let data = await res.json()
     return data
    }
    catch(err){
      console.log(err)
    }
}

export const getData1= async(url)=>{
    try{
     let res =  await fetch(url)
     let data = await res.json()
    return data
    }
    catch(err){ console.log(err)}
}

export const saveOrder = async(orderobj)=>{
  try{
   await fetch(`${import.meta.env.VITE_BASE_URL}/orders`,{
    method:"POST",
    headers:{'content-type':'application/json'},
    body:JSON.stringify(orderobj)
     })
  }
  catch(err){ console.log(err)}
}

export const sendmail = async(obj)=>{
  try{
    let res = await axios.post(`${import.meta.env.VITE_NODE_URL}/sendmail`,obj)
    return res.data
  }
  catch(err){console.log(err.message)}
}