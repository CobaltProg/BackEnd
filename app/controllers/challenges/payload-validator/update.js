const _ = require('node-validator')

module.exports = _.isObject()
  .withOptional('name', _.isString())
  .withOptional('description', _.isString())
  .withOptional('date_start', _.isDate())
  .withOptional('date_end', _.isDate())
  .withOptional('photo', _.isString())
  .withOptional('author', _.isString())
  .withOptional('guest', _.isString())
  .withOptional('difficulty', _.isNumber())
  .withOptional('private', _.isBoolean())
  .withOptional('conversation', _.isString())
  .withOptional('album', _.isString())
  .withOptional('ratings', _.isArray())