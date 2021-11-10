const express=require('express')
const router = express.Router()

const {register_user}=require('../controllers/userController')


router.post('/user/signup', register_user)

module.exports = router