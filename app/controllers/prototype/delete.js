const Camel = require('../../models/minuscule')
/**
 * Delete
 * @Class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.CamelModel = connect.model('Camel', Camel)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.delete('/minuscule/delete/:id', (req, res) => {
      // let deletedCamel
      try {
        const { id } = req.params
        this.CamelModel.findById(id).then(minuscule => {
          res.json(minuscule || {})
          this.CamelModel.findByIdAndDelete(id, minuscule => {
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
