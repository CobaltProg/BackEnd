const Challenge = require('../../models/challenge')

/**
 * Show
 * @Class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.Challenge = connect.model('Challenge', Challenge)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.get('/challenge/show/today', (req, res) => {
      this.Challenge.findById('5e6a2203a9832734708f543c').then(challenge => { 
        res.render('newChallenge', {layout: 'layouts/main', challenge: challenge})
      })
    })

    this.app.get('/challenge/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.Challenge.findById(id).then(challenge => {
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

module.exports = Show
