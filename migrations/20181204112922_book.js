
exports.up = function(knex, Promise) {

  return knex.schema.createTable('book', function (table) {
    table.increments()
    table.string('Book_Title')
    table.string('Book_Genre')
    table.text('Book_Description')
    table.string('Book_Cover_URL')


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')
};
