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
    const id = req.params.id
    const address = await Address.find({userId: id})
    res.send(address)
}))

userRouter.delete('/address/:id', isAuth, expressAsyncHandler(async(req, res) => {
    await Address.deleteOne({_id:req.params.id})
    res.send({id:req.params.id})
}))

userRouter.put('/address/:id',isAuth,expressAsyncHandler(async(req,res)=>{
    const address=await Address.findById(req.params.id)
    if(address) {
        address.name= req.body.name;
                address.mobNo=req.body.mobNo
                address.pinCode=req.body.pinCode
                address.address=req.body.address
                address.town=req.body.town
                address.state=req.body.state
                address.city=req.body.city
                const newAddress= await address.save()
                res.send(newAddress)
    }
    else {
        res.status(404).send({message:'Address not found!'})
    }
}))

userRouter.post('/address',expressAsyncHandler(async(req,res)=>{
    console.log(req.body)
const newAdress = Address({
       name:req.body.name,
       mobNo:req.body.mobNo,
       pinCode:req.body.pinCode,
       address:req.body.address,
       town:req.body.town,
       state:req.body.state,
       city:req.body.city,
       userId:req.body.userId
})
const address = await newAdress.save()
res.send(address)

}))

userRouter.put('/updateProfile',isAuth,expressAsyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id)
    if(user) {
        user.name = req.body.name;
        user.mobNo = req.bodymobNo
        const updatedUser = await user.save();
        res.send({
            _id: user._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            mobNo: updatedUser.mobNo,
            token: generateToken(updatedUser),
        })
    }
    else {
        res.status(404).send({ message: "User not found" })
    }
}))
