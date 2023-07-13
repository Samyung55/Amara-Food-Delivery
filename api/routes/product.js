const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const data = require("../data.js");
const Product = require("../models/products.js");
const Wishlist = require("../models/wishlist.js");
const { isAuth } = require("../utlis.js");