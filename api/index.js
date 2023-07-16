const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./routes/user');
const productRouter = require('./routes/product.js');
const dotenv = require('dotenv')
const orderRouter = require('./routes/order.js');
const { path, dirname} = require('path')
const { fileURLToPath } = require('url');
dotenv.config()

const app = express();
app.use(express.json({ limit: '30mb', extended: true }))  // to parse body in json format (body parser)
app.use(express.urlencoded({limit: '30mb',extended:true}))
const PORT= process.env.PORT || 5000

const uri = "mongodb+srv://yungdml31:Success5584123.@cluster0.cnjhvl2.mongodb.net/?retryWrites=true&w=majority"
const db = mongoose.connection;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    db.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
    db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
  
  // Close the connection when the Node.js process is terminated
    process.on('SIGINT', () => {
    db.close(() => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });

    app.use(cors())
    app.use('/api/users',userRouter);
    app.use('/api/products',productRouter)
    app.use('/api/orders',orderRouter)

    app.use((err, req , res, next)=>{
        res.status(500).send({message:err.message})
    })

    app.listen(PORT,()=>{
        console.log(`server running at http://localhost:${PORT}`)
    });