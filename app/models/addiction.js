const mongoose = require('mongoose')

const addictionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  addictionthreshold: {
    type: String,
    required: true
  },

}, {
  collection: 'addictions',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = addictionSchema
