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