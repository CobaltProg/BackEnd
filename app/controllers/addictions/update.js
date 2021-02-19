const Addiction = require('../../models/addiction')
const check = require('../addictions/payload-validator/update.js')
const validator = require('node-validator')


/**
 * Update
 * @Class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.AddictionModel = connect.model('Addiction', Addiction)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.put('/addiction/update/:id', validator.express(check), (req, res) => {
      try {
        const { id } = req.params
        const { body } = req
        
        this.AddictionModel.findByIdAndUpdate(id, body, {new: true}).then((addiction) => {
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

module.exports = Update
