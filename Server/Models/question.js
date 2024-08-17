const mongoose = require('mongoose');


const questionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  questionId: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
}, {
  timestamps: true 
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
