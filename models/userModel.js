const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    DOB:{
        type: Date
    }
})

module.exports = mongoose.model("USer", userSchema)