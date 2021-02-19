const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
  messages: [{
    message: {
      author: { type: mongoose.ObjectId, required: true },
      date: { type: Date, default: Date.now },
      body: { type: String, required: true },
      comments: [{
        author: { type: mongoose.ObjectId, required: true },
        date: { type: Date, default: Date.now },
        body: { type: String, required: true }
      }]
    }
  }]
}, {
  collection: 'conversations',
  minimize: false,
  versionKey: false
})

module.exports = conversationSchema
