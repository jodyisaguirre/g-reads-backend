
exports.up = function(knex, Promise) {

  return knex.schema.createTable('author', function (table) {
    table.increments()
    table.string('First_Name')
    table.string('Last_Name')
    table.text('Biography')
    table.string('Portrait_URL')


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author')
};
