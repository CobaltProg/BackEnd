const Group = require('../../models/group')
const check = require('../groups/payload-validator/update.js')
const validator = require('node-validator')

/**
 * Update
 * @Class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.GroupModel = connect.model('Group', Group)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.put('/group/update/:id', validator.express(check), (req, res) => {
      try {
        const { id } = req.params
        const { body } = req
        
        this.GroupModel.findByIdAndUpdate(id, body, {new: true}).then((group) => {
          res.status(200).json(group || {})
        }).catch(err => {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        })
      } catch (err) {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      }
    })
  }

  /**
   * Run
   */
  run () {
    this.middleware()
  }
}

module.exports = Update
