const router = require('express').Router()
const authServices = require('./auth.services')

router.post('/login' , authServices.login)

module.exports = router