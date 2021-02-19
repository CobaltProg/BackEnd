const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  
  pseudo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: Number,
  image_profil: {
    type: String,
    default: 'https://placehold.it/64x64'
  },
  //addiction: LienVersleModelAddiction
}, {
  collection: 'users',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = userSchema
