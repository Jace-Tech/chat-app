const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// require('@jace.dev/exceptjs')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

// IMPORT ROUTES 
const authRoute = require("./routes/authRoute")

// EXPRESS MIDDLEWARES
app.use(cors({ origin: '*'}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ROUTES
app.use("/api/auth", authRoute)


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => {
    app.listen(PORT, () => console.log(`Server running at PORT http://localhost:${PORT}`));
})



