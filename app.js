const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')


let port = process.env.PORT || 3003

const bookRoutes = require('./routes/bookRoutes.js')
const authorRoutes = require('./routes/authorRoutes.js')






app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('😈😈😈😈😈')
})

app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)

app.use(notFound)
app.use(errorHandler)




function notFound(req, res, next) {
  res.status(404).send({ error: 'Not Today ISIS!', status: 404, url: req.originalUrl })
}


function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}


app.listen(port, () => console.log(`Server running on port ${port}`))
