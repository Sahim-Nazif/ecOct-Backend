const mongoose=require('mongoose')

const reviewSchema=new mongoose.Schema({

    userid:{
        type:mongoose.Schema.Types.ObjectID
    },
    name:{
        type:String
    },
    comment:{
        type:String
    },
    rating:{
        type:Number
    }
}, { timestamps: true })


const productSchema=new mongoose.Schema({

    name:{
        type:String
    },
    image:{
        type:String
    },
    category:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    countInStock:{

        type:Number
    },
    rating:{
        type:Number
    },
    reviews:[reviewSchema]
}, { timestamps: true })


module.exports=mongoose.model('Product', productSchema)

