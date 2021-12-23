const Product=require('../models/productModel')


const create_product=(req, res)=>{

    const product= new Product (req.body)
 
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

const get_product_byId=(req, res)=>{

    Product.find({_id:req.body.productId},(error, product)=>{
      
        if (error || !product) {
            return res.status(400).json({ error: 'Could not find the product' })
        }
        res.json(product[0])
    })
  
}

const give_review=async(req, res)=>{

    const {review, productid, currentUser}=req.body
    
    const product=await Product.findById({_id:productid})

    const reviewModel={
        name:currentUser.name,
        userid:currentUser._id,
        rating:review.rating,
        comment:review.comment
    }
    product.reviews.push(reviewModel)
    product.save(err=>{
        if (err) {
       
            res.status(400).json({message:'Something went wrong'})
            
        }else {
          
            res.status(200).json({message:'Thanks for the feedback'})
        }
    })

}

module.exports={

    create_product,
    get_all_products,
    get_product_byId,
    give_review
}