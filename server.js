const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const next = require('./next')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/', express.static(path.join(__dirname, 'public')))

const start = async (port) => {
  // Couple Next.js with our express server.
  // app and handle from "next" will now be available as req.app and req.handle.
  await next(app)

  // Normal routing, if you need it.
  // Use your SSR logic here.
  // Even if you don't do explicit routing the pages inside app/pages
  // will still get rendered as per their normal route.
  app.get('/', (req, res) => req.app.render(req, res, '/', {
      routeParam: req.params.routeParam
  }))

  app.listen(port)
}

// Start the express server.
start(3000)

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare()
// .then(() => {
//   const server = express()

//   server.get('*', (req, res) => {
//     return handle(req, res)
//   })
  
//   server.listen(3000, (err) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })
// })
// .catch((ex) => {
//   console.error(ex.stack)
//   process.exit(1)
// })