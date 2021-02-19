const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
 
   author: { type: mongoose.ObjectId, required: true },
   date: { type: Date, default: Date.now },
   url: { type: String, required: true },
   content: {type:String,required: true},
    comments: [{
      author: { type: mongoose.ObjectId, required: true },
      date: { type: Date, default: Date.now },
      body: { type: String, required: true }
    }]
  
}, {
  collection: 'posts',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = postSchema
