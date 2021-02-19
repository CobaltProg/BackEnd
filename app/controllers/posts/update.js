const Post = require('../../models/post')

/**
 * Update
 * @Class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.PostModel = connect.model('Post', Post)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.put('/Post/update/:id', (req, res) => {
      try {
        const { id } = req.params
        const { body } = req
        
        this.PostModel.findByIdAndUpdate(id, body, {new: true}).then((post) => {
          res.status(200).json(post || {})
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
