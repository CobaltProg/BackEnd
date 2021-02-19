const _ = require('node-validator')

module.exports = _.isObject()
  .withOptional('name', _.isString())
  .withOptional('description', _.isString())
  .withOptional('addictionthreshold', _.isString())
  