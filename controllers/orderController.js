const stripe = require('stripe')(process.env.STRIPE_SECRET)
const uuidv4 = require('uuid').v4


const charges_stripe = (req, res) => {


    const { token, cartTotal } = req.body;
    try {
        stripe.customers
            .create({
                name: token.name,
                email: token.email,
                source: token.id
            })
            .then(customer =>

                stripe.charges.create({

                    amount: cartTotal * 100,
                    currency: 'cad',
                    customer: customer.id,
                    receipt_email: token.email

                }, {
                    idempotencyKey: uuidv4()
                })
            )
            .then(() => res.send('Payment successful'))
            .catch(err => console.log(err));
    } catch (err) {
        return res.status(400).json({message:'Payment failed'})
    }
}


module.exports = {

    charges_stripe
}