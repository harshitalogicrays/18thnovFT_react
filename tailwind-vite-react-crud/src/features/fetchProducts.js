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