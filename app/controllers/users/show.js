const User = require('../../models/user')
const Challenge = require('../../models/challenge')

/**
 * Show
 * @Class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.UserModel = connect.model('User', User)
    this.ChallengeModel = connect.model('Challenge', Challenge)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.get('/user/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.UserModel.findById(id).then(user => {
          res.status(200).json(user || {})
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

    this.app.get('/user/show/:id/challenge', (req, res) => {
      const { id } = req.params
      this.UserModel.findById(id).then(user => { 
        this.ChallengeModel.findById('5e694a4f2f6c1d0a48f55cf4').then(challenge => { 
          res.render('challenge', {layout: 'layouts/main', user: user, challenge: challenge})
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
