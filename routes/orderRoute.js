const express = require('express')
const router = express.Router()
const {charges_stripe}=require('../controllers/orderController')


router.post('orders/placeOrder', charges_stripe)


module.exports=router;