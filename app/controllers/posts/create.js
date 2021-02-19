const Post = require('../../models/post.js')

/**
 * Create
 * @Class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.PostModel = connect.model('Post', Post)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.post('/post/create', (req, res) => {
      try {
        const postModel = new this.PostModel(req.body)
        postModel.save().then(post => {
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

module.exports = Create
