const Group = require('../../models/group')

/**
 * Show
 * @Class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.Group = connect.model('Group', Group)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.get('/group/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.Group.findById(id).then(group => {
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

module.exports = Show
