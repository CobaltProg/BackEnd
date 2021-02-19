const Challenge = require('../../models/challenge')
/**
 * Delete
 * @Class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.ChallengeModel = connect.model('Challenge', Challenge)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.delete('/challenge/delete/:id', (req, res) => {
      // let deletedChallenge
      try {
        const { id } = req.params
        this.ChallengeModel.findById(id).then(challenge => {
          res.json(challenge || {})
          this.ChallengeModel.findByIdAndDelete(id, challenge => {
            return res.status(200)
          }).catch(err => {
            res.status(500).json({
              'code': 500,
              'message': err
            })
          })
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

module.exports = Delete
