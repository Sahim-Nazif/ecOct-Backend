const express=require('express');
const app=express()
require ('dotenv').config()
const morgan=require('morgan')
const mongoose=require('mongoose')
const productRoute=require('./routes/productRoute')
const orderRoute=require('./routes/orderRoute')
const userRoute=require('./routes/userRoute')
const bodyParser=require('body-parser')


//db connection
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Mongo-DB Connected...'))
    .catch(err => console.log(err));



//middlewares
if (process.env.NODE_ENV==='development') {
    app.use(morgan('dev'))
    console.log('the app is in development phase')

} else if (process.env.NODE_ENV==='production') {

    console.log('the app is in production phase ')
}
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api', orderRoute)
app.use('/api', productRoute)
app.use('/api', userRoute)


const port=process.env.PORT
app.listen(port, ()=>{
    console.log(`Server Running On Port: ${port}`)
})

