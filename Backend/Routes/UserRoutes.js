const express = require('express') 
const UserController = require('../Controller/User')
const { uploadUserFile } = require('../Multer/Multer')
const route = express.Router() 


route.post("/CreateUser/TakeIdAndPersonalInfo", uploadUserFile, UserController.TakeIdAndPersonalInfoController )


module.exports = route