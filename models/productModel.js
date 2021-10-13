const mongoose=require('mongoose')

const reviewSchema=mongoose.Schema({

    userid:{
        type:mongoose.Schema.Types.ObjectID
    },
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
}, { timestamps: true })


const productSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    countInStock:{

        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    reviews:[reviewSchema]
}, { timestamps: true })


const Product=mongoose.model('products', productSchema)

module.exports=Product