const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'https://fontawesome.com/icons/Groups?style=solid',
    required: true
  },
  group_type: {
    type: Number, // 1=public 2=private secret=3
    required: true
  },
  membersCanPubli: {
    type: Boolean,
    required: true
  },
  membersCanEvent: {
    type: Boolean,
    required: true
  },
  admins: {
    type: Array,
    required: true
  },
  members: {
    type: Array,
    required: true
  },
  conversation: mongoose.ObjectId,
  events: Array
}, {
  minimize: false,
  versionKey: false
})

module.exports = groupSchema
