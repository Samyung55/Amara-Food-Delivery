const app = express();
app.use(express.json({ limit: '30mb', extended: true }))  // to parse body in json format (body parser)
app.use(express.urlencoded({limit: '30mb',extended:true}))
const PORT= process.env.PORT || 5000

mongoose.connect(uri,
    err => {
        if(err) throw err;
        console.log('connected...')
    });

    app.use(cors())
    app.use('/api/users',userRouter);
    app.use('/api/products',productRouter)
    app.use('/api/orders',orderRouter)

    app.use((err,req,res,next)=>{
        res.status(500).send({message:err.message})
    })

    app.listen(PORT,()=>{
        console.log(`server running at http://localhost:${PORT}`)
    });