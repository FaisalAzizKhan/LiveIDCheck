const mongoose = require("mongoose")


const ConnetToMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Mongo DB Connected")
        
    } catch (err) {
        console.log(err)
    }
}

module.exports = { ConnetToMongoDB } 