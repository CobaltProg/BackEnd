const Conversation = require('../../models/conversation')
const check = require('../conversations/payload-validator/update.js')
const validator = require('node-validator')

/**
 * Update
 * @Class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.ConversationModel = connect.model('Conversation', Conversation)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.put('/conversation/update/:id', validator.express(check), (req, res) => {
      try {
        const { id } = req.params
        const { body } = req
        
        this.ConversationModel.findByIdAndUpdate(id, body, {new: true}).then((conversation) => {
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

module.exports = Update
