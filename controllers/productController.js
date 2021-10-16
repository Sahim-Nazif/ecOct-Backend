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

const get_all_products=async(req, res)=>{

    await Product.find().exec((error, products)=>{

        if (error || !products){
            return res.status(400).json({error:'Sorry we are out of stock'})
        }
        return res.json(products)
    })

}

module.exports={

    create_product,
    get_all_products
}