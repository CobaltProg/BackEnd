const Conversation = require('../../models/conversation')

/**
 * Show
 * @Class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.Conversation = connect.model('Conversation', Conversation)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.get('/conversation/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.Conversation.findById(id).then(conversation => {
          res.status(200).json(conversation || {})
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
