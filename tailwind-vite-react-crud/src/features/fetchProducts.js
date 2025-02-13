export const getData = async()=>{
    try{
     let res =  await fetch("https://dummyjson.com/products")
     let data = await res.json()
        return data.products
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