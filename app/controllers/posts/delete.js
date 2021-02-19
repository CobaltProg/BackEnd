const Post= require('../../models/post')
/**
 * Delete
 * @Class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.PostModel = connect.model('Post', Post)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.delete('/post/delete/:id', (req, res) => {
      // let deletedAlbum
      try {
        const { id } = req.params
        this.PostModel.findById(id).then(post => {
          res.json(post || {})
          this.PostModel.findByIdAndDelete(id, post => {
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
