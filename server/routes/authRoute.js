const { handleRegistration, handleLogin, handleUsers } = require('../controllers/authController')
const Authorization = require('../middlewares/Authorization')

const router = require('express').Router()


router.post('/register', handleRegistration)
router.post('/login', handleLogin)
router.get('/users', Authorization, handleUsers)
module.exports = router