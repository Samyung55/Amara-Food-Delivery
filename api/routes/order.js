const express = require("express")
const expressAsyncHandler = require("express-async-handler");
const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const Order = require("../models/order.js")
const { emailTemplate, isAuth } = require("../utlis.js");

const orderRouter= express.Router()

const CLIENT_ID='';
const CLIENT_SECRET='';
const REDIRECT_URI='';
const REFRESH_TOKEN='';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

orderRouter.get('/',isAuth,expressAsyncHandler(async(req,res)=>{
    const orders = await Order.find({userId:req.user._id})
    res.send(orders)
}))
orderRouter.get('/admin-orders',expressAsyncHandler(async(req,res)=>{
    const orders = await Order.find().sort({_id:-1}).limit(20)
    res.send(orders)
}))

orderRouter.post('/',isAuth,expressAsyncHandler(async(req,res)=>{
    if(req.body.orderItems.length===0){
     res.status(400).send({message:'cart is empty!'})
    }
    else{
       const accessToken = oAuth2Client.getAccessToken();
        const newOrder= new Order({
           orderItems:req.body.orderItems,
           shippingAddress:req.body.shippingAddress,
           paymentMethod:req.body.paymentMethod,
           itemsPrice:req.body.itemsPrice,
           totalprice:req.body.totalprice,
           shippingPrice:req.body.shippingPrice,
           paymentId:req.body.paymentId,
           userId:req.user._id,
           email:req.body.email,
           userName:req.body.userName
        })
        const order = await newOrder.save()

       let transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
           type:'OAuth2',
           user:'jaydeepshelake2001@gmail.com' ,
           clientId:CLIENT_ID,
           clientSecret:CLIENT_SECRET,
           refreshToken:REFRESH_TOKEN,
           accessToken:accessToken
         },
       });

        // send mail with defined transport object
   let info = await  transporter.sendMail({
    from: 'jaydeepshelake2001@gmail.com', // sender address
    to: order.email, // list of receivers
    subject: "Order placed Successfuly🎉",
    text: "Hello world?", // Subject line
    html:emailTemplate(order), // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
res.status(201).send({message:'Order Placed !',order:order})

 }
}))

