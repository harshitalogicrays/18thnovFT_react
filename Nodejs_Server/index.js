import express from 'express'
import 'dotenv/config'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SK)
const port = process.env.PORT || 2000

const app = express()
//http://localhost:5000 
app.get('/',(req,res)=>{
    res.send("hello from server ")
})
app.get('/course/:id',(req,res)=>{
    console.log(req.params)
    res.send("course ")
})
app.post('/payment',(req,res)=>{

})

app.listen(port , ()=>{
    console.log(`server started at http://localhost:${port}`)
})