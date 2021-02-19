const Challenge = require('../../models/challenge')
const check = require('../challenges/payload-validator/update.js')
const validator = require('node-validator')

/**
 * Update
 * @Class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.ChallengeModel = connect.model('Challenge', Challenge)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.put('/challenge/update/:id', validator.express(check), (req, res) => {
      try {
        const { id } = req.params
        const { body } = req
        
        this.ChallengeModel.findByIdAndUpdate(id, body, {new: true}).then((challenge) => {
          res.status(200).json(challenge || {})
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
