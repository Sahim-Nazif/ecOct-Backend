const express=require('express');
const router=express.Router();

const {create_product, 
        get_product_byId,
         get_all_products,give_review}=require('../controllers/productController')



router.post('/product/create', create_product)
router.get('/product/all', get_all_products)
router.post('/product/byId', get_product_byId)
router.post('/product/addreview', give_review)

module.exports=router