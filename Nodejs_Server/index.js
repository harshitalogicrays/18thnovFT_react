import express from 'express'
import 'dotenv/config'
import Stripe from 'stripe'
import cors from 'cors'
const stripe = new Stripe(process.env.STRIPE_SK)
const port = process.env.PORT || 2000

const app = express()

app.use(cors())
app.use(express.json())
//http://localhost:5000 
app.get('/',(req,res)=>{
    res.send("hello from server ")
})
app.get('/course/:id',(req,res)=>{
    console.log(req.params)
    res.send("course ")
})
app.post('/create-payment-intent', async (req, res) => {
    console.log(req.body) //{amount:10000}
    try{
        const paymentIntents = await stripe.paymentIntents.create({
            amount:(req.body.amount)*100, // 100.00,
            currency:"usd",
            payment_method_types:['card']
        })
        console.log(paymentIntents.client_secret)
        res.status(200).json({clientSecret:paymentIntents.client_secret})
    }
   catch(err){
    res.status(500).json({message:err.message})
   }
  });

app.listen(port , ()=>{
    console.log(`server started at http://localhost:${port}`)
})