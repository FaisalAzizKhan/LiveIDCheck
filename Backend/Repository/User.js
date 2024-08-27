const { User } = require("../Model/User")


const getUserByEmailRepo = async(email) =>{

    try {
        return await User.findOne({ email }) 
    } catch (err) {
        throw err
    }

} 

const createNewUser = async(payload) => {
    try {
        return await User.create({
            email: payload.email,
            username: payload.username,
            idfileurl: payload.idfileurl
        })
    } catch (err) {
        throw err
    }
}


module.exports = { getUserByEmailRepo, createNewUser }