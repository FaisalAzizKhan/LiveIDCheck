const mongoose = require('mongoose') 

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    idfileurl: { type: String, required: false }
}) 

const User = mongoose.model('User', userSchema) 

module.exports = { User } 