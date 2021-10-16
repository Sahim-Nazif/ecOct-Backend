const express=require('express');
const router=express.Router();

const {create_product}=require('../controllers/productController')
const {get_all_products}=require('../controllers/productController')


router.post('/product/create', create_product)
router.get('/product/all', get_all_products)

module.exports=router