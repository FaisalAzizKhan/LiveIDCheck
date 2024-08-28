const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { ConnetToMongoDB } = require("./DatabaseConnecion/MongoDB")
const route = require("./Routes/UserRoutes")
const path = require("path")
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: '*', methods: ['GET', 'POST'], credentials: true,}))
app.use(route)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

ConnetToMongoDB()

app.listen(9002, () => {
    console.log(`Server is running on port 9002`)
})
