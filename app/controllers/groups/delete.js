const Group = require('../../models/group')
/**
 * Delete
 * @Class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.GroupModel = connect.model('Group', Group)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.delete('/group/delete/:id', (req, res) => {
      // let deletedGroup
      try {
        const { id } = req.params
        this.GroupModel.findById(id).then(group => {
          res.json(group || {})
          this.GroupModel.findByIdAndDelete(id, group => {
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
