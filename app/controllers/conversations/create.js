const Conversation = require('../../models/conversation.js')

/**
 * Create
 * @Class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.ConversationModel = connect.model('Conversation', Conversation)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.post('/conversation/create', (req, res) => {
      try {
        const conversationModel = new this.ConversationModel(req.body)
        conversationModel.save().then(conversation => {
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

module.exports = Create
