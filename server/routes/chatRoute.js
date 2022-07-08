const router = require('express').Router()
const Authorization = require('../middlewares/Authorization')
const { handleCreateChat } = require('../controllers/chatController')


router.post("/", Authorization, handleCreateChat)


module.exports = router