const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        minlength:6,
        required:true
    },
    role:{
        type: String,
        required: true,
        default:'Basic'
    }
})

const user = mongoose.model('user',userSchema)
module.exports = user
