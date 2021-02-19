const _ = require('node-validator')

module.exports = _.isObject()
  .withOptional('pseudo', _.isString())
  .withOptional('email', _.isString())
  .withOptional('password', _.isString())
  .withOptional('image_profil', _.isString())
  .withOptional('friends', _.isArray())
