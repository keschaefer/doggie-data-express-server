
exports.up = function(knex, Promise) {
   return knex.schema.createTable('locations', (location) => {
      location.increments('id')
      location.string('location_name')
      location.string('location_address')
      location.string('description')
      location.string('category')
      location.integer('ranking')
      location.string('image')
   })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableExists('locations')
};
