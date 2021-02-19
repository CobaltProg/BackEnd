const Addiction = require('../../models/addiction')
/**
 * Delete
 * @Class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.AddictionModel = connect.model('Addiction', Addiction)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.delete('/addiction/delete/:id', (req, res) => {
      // let deletedUser
      try {
        const { id } = req.params
        this.AddictionModel.findById(id).then(addiction => {
          res.json(addiction || {})
          this.AddictionModel.findByIdAndDelete(id, addiction => {
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