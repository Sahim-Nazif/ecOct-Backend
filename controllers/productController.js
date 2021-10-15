const Product=require('../models/productModel')


const create_product=(req, res)=>{

    const product= new Product (req.body)
    console.log(product)
    product.save((error, data)=>{

        if (error) {
            return res.status(400).json({error:'Sorry Product was not created!!'})
        }
        res.json(data)
    })

}

module.exports={

    create_product
}