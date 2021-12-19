const express = require('express')
const router = express.Router()
const {charges_stripe, getOrdersByUserId, getOrderById}=require('../controllers/orderController')


router.post('/orders/placeOrder', charges_stripe)
router.get('/orders/getordersbyUserid', getOrdersByUserId)
router.get('orders/getorderbyid', getOrderById)

module.exports=router;