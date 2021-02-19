const express = require('express')
const path = require('path')
const routes = require('./controllers/routes.js')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const expressHbs = require('express-handlebars') 
var serveStatic = require('serve-static')

/**
 * Server
 * @Class
 */
class Server {
  constructor () {
    this.app = express()
  }

  /**
   * db connect
   * @Return {Object} connect
   */
  dbConnect () {
    const host = 'mongodb://localhost:27017/beabetteryou'
    const connect = mongoose.createConnection(host, {useNewUrlParser: true})

    connect.on('error', (err) => {
      setTimeout(() => {
        console.log('[ERROR] stream mentions api dbConnect() -> mongodb error')
        this.connect = this.dbConnect(host)
      }, 5000)

      console.error(`[ERROR] api dbConnect() -> ${err}`)
    })

    connect.on('disconnected', () => {
      setTimeout(() => {
        console.log('[DISCONNECTED] api dbConnect() -> mongodb disconnected')
        this.connect = this.dbConnect(host)
      }, 5000)
    })

    process.on('SIGINT', () => {
      connect.close(() => {
        console.log('[API END PROCESS] api dbConnect() -> mongodb connection')
        process.exit(0)
      })
    })

    return connect
  }

  /**
   * middleware
   */
  middleware () {
    this.app.use(bodyParser.urlencoded({ 'extended': true }))
    this.app.use(bodyParser.json())
    this.app.engine('handlebars', expressHbs({defaultLayout: 'main', extname: '.hbs'}))
    this.app.set('view engine', '.hbs')
    this.app.set('views', path.join(__dirname, '/views'))
    // this.app.use('/static', express.static(path.join(__dirname, '/public')))
    this.app.use(serveStatic(path.join(__dirname, '/public')))
  }

  /**
   * Routes
   */
  routes () {
    // User
    new routes.users.CreateUser(this.app, this.connect)
    new routes.users.ShowUser(this.app, this.connect)
    new routes.users.UpdateUser(this.app, this.connect)
    new routes.users.DeleteUser(this.app, this.connect)

    // Addiction
    new routes.addictions.CreateAddiction(this.app, this.connect)
    new routes.addictions.ShowAddiction(this.app, this.connect)
    new routes.addictions.UpdateAddiction(this.app, this.connect)
    new routes.addictions.DeleteAddiction(this.app, this.connect)

    // Group
    new routes.groups.CreateGroup(this.app, this.connect)
    new routes.groups.ShowGroup(this.app, this.connect)
    new routes.groups.UpdateGroup(this.app, this.connect)
    new routes.groups.DeleteGroup(this.app, this.connect)

    // Post
    new routes.posts.CreatePost(this.app, this.connect)
    new routes.posts.ShowPost(this.app, this.connect)
    new routes.posts.UpdatePost(this.app, this.connect)
    new routes.posts.DeletePost(this.app, this.connect)

    // Challenge
    new routes.challenges.CreateChallenge(this.app, this.connect)
    new routes.challenges.ShowChallenge(this.app, this.connect)
    new routes.challenges.UpdateChallenge(this.app, this.connect)
    new routes.challenges.DeleteChallenge(this.app, this.connect)

    this.app.use((req, res) => {
      res.status(404).json({
        'code': 404,
        'message': 'Not found in API'
      })
    })
  }

  /**
   * Run
   */
  run () {
    try {
      this.connect = this.dbConnect()
      this.dbConnect()
      this.middleware()
      this.routes()
      this.app.listen(3000)
    } catch (err) {
      console.error(`[ERROR] Server -> ${err}`)
    }
  }
}

module.exports = Server
