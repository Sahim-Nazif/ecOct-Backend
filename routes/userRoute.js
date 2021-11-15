const express=require('express')
const router = express.Router()

const {register_user, login_user}=require('../controllers/userController')


router.post('/user/signup', register_user)
router.post('/user/login', login_user)

module.exports = router