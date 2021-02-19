const Addiction = require('../../models/addiction.js')

/**
 * Create
 * @Class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.AddictionModel = connect.model('Addiction', Addiction)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.post('/addiction/create', (req, res) => {
      try {
        const addictionModel = new this.AddictionModel(req.body)

        addictionModel.save().then(addiction => {
          res.status(200).json(addiction || {})
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