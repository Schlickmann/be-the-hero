exports.up = function(knex) {
  return knex.schema.createTable('ngos', function (table) {
       table.string('id').primary();
       table.string('name').notNullable();
       table.string('email').notNullable();
       table.string('whatsapp').notNullable();
       table.string('city').notNullable();
       table.string('state', 2).notNullable();
       table.string('country').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ngos");
};

exports.config = { transaction: false };