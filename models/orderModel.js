const mongoose=require('mongoose');


const orderSchema=new mongoose.Schema({


    userid:{
        type:String
     
    },
    name:{
        type:String
      
    },
    email:{
        type:String
        
    },
    orderItems:[{
        name:{type:String, required:true},
        quantity:{type:String, required:true},
        _id:{type:String, required:true},
        price:{type:Number, required:true}
    }],
    shippingAddress:{
        address:{type:String, required:true},
        city:{type:String, required:true},
        postalCode:{type:String, required:true},
        country:{type:String, required:true}
    },
    orderAmount:{
        type:Number,
        required:true

    },
    transactionId:{
        type:String,
        required:true
    },
    isDelivered:{
        type:Boolean, required:true
    },
    
}, {timestamps:true})

module.exports=mongoose.model('Order', orderSchema)

