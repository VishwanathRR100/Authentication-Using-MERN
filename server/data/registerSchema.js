const mongoose = require("mongoose")

const registerData = new mongoose.Schema({
    name: {
        type: String,
        required:[true,"Please Enter your name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter your Email"],
        minLength:10
    },
    password:{
        type: String,
        required:[true,"Please Enter the Password"]
    }
})

const registerModel = mongoose.model("register", registerData)

module.exports = registerModel