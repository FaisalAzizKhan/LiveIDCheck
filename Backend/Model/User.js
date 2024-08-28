const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    idfileurl: { type: String, required: false },
    extractedIdText: { type: String, required: false }

}, { timestamps: true })

const User = mongoose.model('User', userSchema);

module.exports = { User };
