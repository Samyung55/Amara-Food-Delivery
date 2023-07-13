import express from "express";
import expressAsyncHandler from "express-async-handler";
import nodemailer from 'nodemailer'
import {google} from 'googleapis'
import Order from "../models/order.js";
import { emailTemplate, isAuth } from "../utlis.js";

const orderRouter= express.Router()

const CLIENT_ID='';
const CLIENT_SECRET='';
const REDIRECT_URI='';
const REFRESH_TOKEN='';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});