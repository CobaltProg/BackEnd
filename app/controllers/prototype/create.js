const Camel = require('../../models/minuscule.js')

/**
 * Create
 * @Class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.CamelModel = connect.model('Camel', Camel)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.post('/minuscule/create', (req, res) => {
      try {
        const minusculeModel = new this.CamelModel(req.body)
        minusculeModel.save().then(minuscule => {
          res.status(200).json(minuscule || {})
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
