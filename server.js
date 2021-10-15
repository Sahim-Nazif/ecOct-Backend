const express=require('express');
const app=express()
require ('dotenv').config()
const morgan=require('morgan')

app.get('/', (req, res)=>{

    res.send('This is backend')
})

//middlewares
if (process.env.NODE_ENV==='development') {
    app.use(morgan('dev'))
    console.log('the app is in development phase')

} else if (process.env.NODE_ENV==='production') {

    console.log('the app is in production phase ')
}



const port=process.env.PORT
app.listen(port, ()=>{
    console.log(`Server Running On Port: ${port}`)
})

