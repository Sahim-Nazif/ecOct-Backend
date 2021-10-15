const express=require('express');
const router=express.Router();

const {create_product}=require('../controllers/productController')



router.post('/product/create', create_product)


module.exports=router