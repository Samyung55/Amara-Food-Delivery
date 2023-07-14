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

