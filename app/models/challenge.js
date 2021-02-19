const mongoose = require('mongoose')

const challengeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required:true
  },
  private: {
    type: Boolean,
    required: false
  },
  
  
  conversation: mongoose.ObjectId,
  album: mongoose.ObjectId
}, {
  collection: 'challenges',
  minimize: false,
  versionKey: false
})

module.exports = challengeSchema
