const Post = require('../../models/post')

/**
 * Show
 * @Class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.Post = connect.model('Post', Post)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.get('/post/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.post.findById(id).then(post => {
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

module.exports = Show
