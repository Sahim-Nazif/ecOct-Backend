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

const login_user=(req, res)=>{

        User.find(
                {email:req.body.email, 
                password:req.body.password}
                ,(err,user)=>{
                    if (user.length>0) {
                        const loggedUser={
                            name:user[0].name,
                            _id:user[0]._id,
                            email:user[0].email
                        }
             
                        res.status(200).json(user)
                    }else {

                        res.status(400).json({message:'Email or password entered is not recognized!'})
                    }
                })
}

module.exports = {
    register_user,
    login_user
}