const express = require('express')
const router = express.Router()
const {charges_stripe, getOrdersByUserId}=require('../controllers/orderController')


router.post('/orders/placeOrder', charges_stripe)
router.get('/orders/getordersbyUserid', getOrdersByUserId)

module.exports=router;