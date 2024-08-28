const express = require('express') 
const UserController = require('../Controller/User')
const route = express.Router() 


route.post("/CreateUser/TakeIdAndPersonalInfo", UserController.TakeIdAndPersonalInfoController )


module.exports = route