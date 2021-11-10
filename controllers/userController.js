const User=require('../models/userModel')

const register_user=(req, res)=>{

    const user= new User(req.body)

    user.save(error=>{

        if (!error) {
            res.send('User registered successfully')
        } else {

            res.send('Please try again')
        }

    })

}

module.exports = {
    register_user
}