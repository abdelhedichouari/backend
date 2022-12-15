const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
   
    
    name: { type: String,
    required: [true,'please provide the name']},
    description:{
        type: String,
    },
   completed:{
        type: Boolean,
        default: false
    },
    user:{
        type : mongoose.Types.ObjectId,
        ref : 'user',
        required : [true,'please provide user']
    },
    category:{
        type : mongoose.Types.ObjectId,
        ref : 'category',

    },
   
         

}, {timestamps: true})
module.exports = mongoose.model('Task', TaskSchema)
