const Camel = require('../../models/minuscule')

/**
 * Show
 * @Class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.Camel = connect.model('Camel', Camel)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.get('/minuscule/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.Camel.findById(id).then(minuscule => {
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

module.exports = Show
