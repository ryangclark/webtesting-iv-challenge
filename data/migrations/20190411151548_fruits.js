exports.up = function(knex, Promise) {
  return knex.schema.createTable('fruits', table => {
    table.increments();

    table.string('name', 128).notNullable();
    table.string('color', 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('fruits');
};
