const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'please provide a name for your category'],
        unique: true
    },
    user:{
        type : mongoose.Types.ObjectId,
        ref : 'user',
      
    },



})
module.exports = mongoose.model('category', categorySchema)