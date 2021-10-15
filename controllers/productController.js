const Product=require('../models/productModel')


const create_product=(req, res)=>{

    const product= new Product (req.body.product)

    product.save((error, data)=>{

        if (error) {
            return res.status(400).json({error:'Sorry Product was not created!!'})
        }
        req.json(data)
    })

}

module.exports={

    create_product
}