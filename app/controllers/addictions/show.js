const Addiction = require('../../models/addiction')
const Challenge = require('../../models/challenge')

/**
 * Show
 * @Class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.AddictionModel = connect.model('Addiction', Addiction)
    this.ChallengeModel = connect.model('Challenge', Challenge)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.get('/addiction/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.AddictionModel.findById(id).then(Addiction => {
          res.status(200).json(Addiction || {})
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

    this.app.get('/addiction/show/:id/challenge', (req, res) => {
      const { id } = req.params
      this.AddictionModel.findById(id).then(addiction => { 
        this.ChallengeModel.findById('5e694a4f2f6c1d0a48f55cf4').then(challenge => { 
          res.render('challenge', {layout: 'layouts/main', addiction: addiction, challenge: challenge})
        })
      })
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
