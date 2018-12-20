const express = require('express')
const router = express.Router()
const knex =require('../db/connection')

router.get('/',  (req,res) =>{
  knex('book')
  .orderBy('id', 'asc')
    .then(books => {
       res.json({ books: books })
    })
  })

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  knex('book')
  .where('id', id)
  .then(book => {
  res.json({ book: book[0] })
  })
})

router.post('/', (req, res, next) => {
  // Pull the data that is to be posted from the request body
  const body = req.body
  knex('book')
    .insert(body)
    .returning('*')
    .then(book => {
      res.json({ books: book[0] })
    })
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const body = req.body

  knex('book')
    .where ('id',id)
    .update(body)
    .returning('*')
    .then(updatedBook =>{
      res.json({book:updatedBook[0]})
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  knex('book')
    .where ('id',id)
    .delete()
    .returning('*')
    .then(deletedBook =>{
      res.json({beer:deletedBook[0]})
    })
})



module.exports = router
