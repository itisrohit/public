const express = require('express')
const User = require('../models/userModel')
const {signup} = require('../controllers/userController')

const router = express.Router()

router.post('/signup', signup )



module.exports = router