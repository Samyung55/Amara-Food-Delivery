const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const data = require("../data.js");
const Product = require("../models/products.js");
const Wishlist = require("../models/wishlist.js");
const { isAuth } = require("../utlis.js");

const productRouter = express.Router();

productRouter.get('/',expressAsyncHandler(async(req,res)=>{
    const products = await Product.find({category:req.query.category}) //return all products
    res.send(products)
  }));
  
  productRouter.get('/search',expressAsyncHandler(async(req,res)=>{
    let regEx = new RegExp(req.query.name,'i');
    const serachedProducts = await Product.find({name:regEx})
    if(serachedProducts){
        res.send(serachedProducts)

    }else{
      res.status(402).send({message:'Opps No product found!!'})
    }
   }))