const express = require("express");
const router = express.Router();
const knex = require("../db/connection.js");

router.get("/", (req, res, next) => {
  knex("book_author").then(review => {
    res.json({ review: review });
  });
});

// dat many to many join
router.get("/detailed", (req, res, next) => {
  return knex
    .select("*")
    .from("book")
    .innerJoin("book_author", "book.id", "book_author.book_id")
    .innerJoin("author", "author.id", "book_author.author_id")
    .then(response => {
      res.json({
        response: response
      });
    });
});

//get all the ratings for one bar
router.get("/bar/:id", (req, res, next) => {
  const id = req.params.id;

  return knex
    .select("*")
    .from("book")
    .innerJoin("book_author", "book.id", "book_author.user_id")
    .innerJoin("author", "author.id", "book_author.bar_id")
    .where("author.id", id)
    .then(response => {
      res.json({
        response: response
      });
    });
});

// get a author average ratings
router.get("/bar/:id/average", (req, res, next) => {
  const id = req.params.id;

  return knex
    .avg("book_author.stars")
    .from("book")
    .innerJoin("book_author", "book.id", "book_author.user_id")
    .innerJoin("author", "author.id", "book_author.bar_id")
    .where("author.id", id)
    .then(response => {
      console.log("heyo");
      res.json({
        response: response
      });
    });

  // knex.avg('sum_column1').from(function() {
  //   this.sum('column1 as sum_column1').from('t1').groupBy('column1').as('t1')
  // }).as('ignored_alias')
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  knex("book_author")
    .where("id", id)
    .then(review => {
      if (!review.length) {
        next();
      } else {
        res.json({ review: review[0] });
      }
    });
});

router.post("/", (req, res, next) => {
  // const body = req.body
  knex("book_author")
    .insert(req.body)
    .returning("*")
    .then(review => {
      console.log(review);
      res.json({ review: review });
    });
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  knex("book_author")
    .where("id", id)
    .update(body)
    .returning("*")
    .then(updatedReview => {
      res.json({ updatedReview: updatedReview[0] });
    });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  knex("book_author")
    .where("id", id)
    .del()
    .returning("*")
    .then(deletedReview => {
      res.json({ deletedReview: deletedReview[0] });
    });
});

module.exports = router;
