const Camel = require('../../models/minuscule')
const check = require('../minuscules/payload-validator/update.js')
const validator = require('node-validator')

/**
 * Update
 * @Class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.CamelModel = connect.model('Camel', Camel)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.put('/minuscule/update/:id', validator.express(check), (req, res) => {
      try {
        const { id } = req.params
        const { body } = req
        
        this.CamelModel.findByIdAndUpdate(id, body, {new: true}).then((minuscule) => {
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

module.exports = Update
