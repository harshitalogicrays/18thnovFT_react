import express from 'express'
import 'dotenv/config'
import Stripe from 'stripe'
import cors from 'cors'
import nodemailer from 'nodemailer'
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

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: `${process.env.USER}`,
      pass: `${process.env.PWD}`,
    },
  });

app.post('/sendmail',async(req,res)=>{
    let {email,name,status,amount,payment} =  req.body
    try{
       await transporter.sendMail({
            from: `"Admin" ${process.env.USER}`, // sender address
            to: email, // list of receivers
            subject: `your order has been ${status}`, // Subject line
            html: `Hello ${name} <br/>
                        <b>Thank you for ordering from us </b><br> Amount = ${amount}<br/>
                          Order Status : ${status}<br/>
                          Payment:${payment}<br/>
                          Thank You<br/>Admin `, // html body
          });
        res.send({message:"Mail Sent Successfully"})
    }
    catch(err){
        res.status(500).json({message:"something went wrong"})
    }
})
app.listen(port , ()=>{
    console.log(`server started at http://localhost:${port}`)
})