const express = require('express')
const router = express.Router()
const knex =require('../db/connection')

router.get('/',  (req,res) =>{
  knex('author')
  .orderBy('id', 'asc')
    .then(authors => {
       res.json({ authors: authors })
    })
  })

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  knex('author')
  .where('id', id)
  .then(author => {
  res.json({ author: author[0] })
  })
})

router.post('/', (req, res, next) => {
  // Pull the data that is to be posted from the request body
  const body = req.body
  knex('author')
    .insert(body)
    .returning('*')
    .then(book => {
      res.json({ authors: author[0] })
    })
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const body = req.body

  knex('author')
    .where ('id',id)
    .update(body)
    .returning('*')
    .then(updatedAuthor=>{
      res.json({author:updatedAuthor[0]})
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  knex('author')
    .where ('id',id)
    .delete()
    .returning('*')
    .then(deletedAuthor =>{
      res.json({author:deletedAuthor[0]})
    })
})



module.exports = router
