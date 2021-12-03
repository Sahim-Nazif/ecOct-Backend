const stripe=require('stripe')(process.env.STRIPE_SECRET)
const uuidv4 = require('uuid').v4


const charges_stripe=async(req, res)=>{

    const {token, cartItems, currentUser,cartTotal }=req.body;

    const customer=await stripe.customers.create({
        email:token.email,
        source:token.id
    })

    const payment=await stripe.charges.create({

        amount:cartTotal,
        currency:'CA',
        customer:customer,
        receipt_email:token.email
    }, {
        itempotencyKey:uuidv4()
    })

    if(payment) {
        res.send('Payment successful')
    } else {
        return res.status(400).json({message:'Payment failed'})
    }

}




module.exports = {

    charges_stripe
}