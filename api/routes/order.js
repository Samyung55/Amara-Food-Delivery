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