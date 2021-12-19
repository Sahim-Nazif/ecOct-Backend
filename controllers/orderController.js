const stripe = require('stripe')(process.env.STRIPE_SECRET)
const uuidv4 = require('uuid').v4
const Order=require('../models/orderModel')

const charges_stripe = async(req, res) => {


    const { token, currentUser, cartItems, cartTotal } = req.body;
 
        const customer=await stripe.customers.create({
        name: token.name,
        email: token.email,
        source: token.id
    })
    const payment=await stripe.charges.create({
        amount: cartTotal * 100,
        currency: 'cad',
        customer: customer.id,
        receipt_email: token.email
        

    }, {
        idempotencyKey: uuidv4()
    
    })

    if (payment) {
      
        const order= new Order({
            userid:currentUser._id,
            name:currentUser.name,
            email:currentUser.email,
            orderItems:cartItems,
            shippingAddress:{
                address:token.card.address_line1,
                city:token.card.address_city,
                country:token.card.address_country,
                postalCode:token.card.address_zip
            },
            orderAmount:cartTotal,
            transactionId:token.id,
            isDelivered:false
           
        })

        order.save((error, data)=>{
            if (error ) {
               
                return res.status(400).json({message:'Sorry your order was not placed'})
                
           } 
           res.json(data)
        })
    } else {
        return res.status(400).json({message:'Payment was not successful'})
    }

}

const getOrdersByUserId=(req, res)=>{

    const userid=req.body.userid

    Order.find({userid:userid}, (err, data)=>{
        if (err) {
            return res.status(400).json({message:'Something went wrong'})
        } else {
            res.json(data)
        }
    })
    
}

const getOrderById=(req, res)=>{

    const orderid=req.body.orderid

    Order.find({orderid:orderid}, (err, data)=>{
        if (err){
            return res.status(400).json({message:'Something went wrong'})
        }else {
            res.json(data)
        }
    })
}
module.exports = {

    charges_stripe,
    getOrdersByUserId,
    getOrderById
}