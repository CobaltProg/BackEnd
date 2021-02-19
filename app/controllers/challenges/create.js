const Challenge = require('../../models/challenge.js')

/**
 * Create
 * @Class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.ChallengeModel = connect.model('Challenge', Challenge)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.post('/challenge/create', (req, res) => {
      try {
        const challengeModel = new this.ChallengeModel(req.body)
        challengeModel.save().then(challenge => {
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

module.exports = Create
