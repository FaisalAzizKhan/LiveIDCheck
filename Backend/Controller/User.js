const { extractTextFromImage } = require("../Helpers/OCR/Tesseract")
const UserRepo = require("../Repository/User")

const TakeIdAndPersonalInfoController = async (req, res) =>{

    try {
           const User = await UserRepo.getUserByEmailRepo(req.body.email) 
            if(User) return res.status(400).json({message: "User Already Exist"})
            else {
                const filePath = req.file ? req.file.path : null
                let extractedText = null
                if (filePath) extractedText = await extractTextFromImage(filePath)
              
                const newUser = await UserRepo.createNewUser({
                    email: req.body.email,
                    username: req.body.username,
                    idfileurl: filePath,
                    extractedIdText: extractedText
                    
                })
                return res.status(200).json({message: "User Created Succesfully", User: newUser})
            }    

    } catch (err) {
        return res.status(500).json({message: "Server Error", error: err})
    }


}

module.exports = {TakeIdAndPersonalInfoController}