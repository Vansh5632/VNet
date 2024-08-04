const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    questionId:Number,
    selectedOption:String,
})

module.exports =mongoose.model('question',questionSchema);