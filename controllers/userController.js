const User=require('../models/userModel')

const register_user=async(req, res)=>{

    const {name, email, password}=req.body
    const emailExits=await User.findOne({email})
    
    if (emailExits) {
        res.status(400).json({message:'Looks like this user already exists!'})
    } 
    else {
        const user= new User({
            name,
            email,
            password
        })
        user.save(error=>{

            if (error ) {
                 return res.status(400).json({message:'Oh no ! Somethign went wrong,please try again'})
            } else {
    
                res.send('Hey Congrats ! You registeration was successful.')
            }
    
        })
    }


}

module.exports = {
    register_user
}