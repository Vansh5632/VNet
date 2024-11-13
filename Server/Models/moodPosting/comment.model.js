const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        reference:'Post',
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        reference:'User',
    }
});

module.exports = mongoose.model('Comment',commentSchema);