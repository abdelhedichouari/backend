const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: { type: String, },

    username: {
        type: String,
        required : true,

    },
    email: {
        type: String,
        required: [true,'please provide your email'],
        unique: true,

    },
    adresse: {
        type: String,

    }
})
module.exports = mongoose.model('User', userSchema)