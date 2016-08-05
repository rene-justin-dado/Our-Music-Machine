
exports.up = function(knex, Promise) {
  return knex.schema.createTable('drums', function (table) {
    table.increments('btn_id').primary()
    table.string('sound')
})
}
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('drums')
}
