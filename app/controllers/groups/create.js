const Group = require('../../models/group.js')

/**
 * Create
 * @Class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.GroupModel = connect.model('Group', Group)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.post('/group/create', (req, res) => {
      try {
        const groupModel = new this.GroupModel(req.body)

        groupModel.save().then(group => {
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

module.exports = Create
