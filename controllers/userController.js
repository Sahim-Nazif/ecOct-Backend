const User=require('../models/userModel')

const register_user=async(req, res)=>{

    const {email}=req.body
    const emailExits=await User.findOne({email})
    
    if (emailExits) {
        res.send('Looks like this user already exists!')
    } 
    else {
        const user= new User(req.body)
        user.save(error=>{

            if (!error ) {
                res.send('Hey Congrats! You all set')
            } else {
    
                res.send('Oh no ! Somethign went wrong,please try again')
            }
    
        })
    }


}

module.exports = {
    register_user
}