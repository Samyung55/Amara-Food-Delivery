const express = require("express");
const data = require("../data")
const User = require("../models/user")
const bcrypt = require("bcrypt");
const expressAsyncHandler = require("express-async-handler")
const { generateToken, isAuth } = require("../utils")
const Address = require("../models/address")

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createUser = await User.insertMany(data.users)
    res.send({createUser})
}))

// SignIn Route
userRouter.post('/signin', expressAsyncHandler(async(req, res) => {
    const user = await User.findOne({ email: req.body.email })

    if(user) {
        if(bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id:user._id,
                   name:user.name,
                   eamil:user.email,
                   isAdmin:user.isAdmin,
                   mobNo:user?.mobNo,
                   token:genrateToken(user)
            })
            return;
        }
    }
    res,status(401).send({ message: 'Invalid Email or Password'})
}))

// SignUp Route
userRouter.post('/signup',expressAsyncHandler(async(req,res)=>{
    const user = await User.findOne({ email: req.body.email })
    if(user) {
        res.status(401).send({ message: "User already exist "})
    }
    else {
        const newUser = User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        });
        const user = await newUser.save();
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user),
        })
    }
}));

// Adding Address

userRouter.get('/shipping/:id',expressAsyncHandler(async(req,res)=>{
    
}