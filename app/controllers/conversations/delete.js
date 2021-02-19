const Conversation = require('../../models/conversation')
/**
 * Delete
 * @Class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.ConversationModel = connect.model('Conversation', Conversation)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.delete('/conversation/delete/:id', (req, res) => {
      // let deletedConversation
      try {
        const { id } = req.params
        this.ConversationModel.findById(id).then(conversation => {
          res.json(conversation || {})
          this.ConversationModel.findByIdAndDelete(id, conversation => {
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
