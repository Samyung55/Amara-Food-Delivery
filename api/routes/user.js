const express = require("express");
const data = require("../data")
const User = require("../models/user")
const bcrypt = require("bcrypt");
const expressAsyncHandler = require("express-async-handler")
const { generateToken, isAuth } = require("../utils")
const Address = require("../models/address")

const userRouter = express.Router();

