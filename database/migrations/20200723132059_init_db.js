exports.up = function (knex) {
  return knex.schema.createTable("characters", (tbl) => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.string("gender").notNullable();
    tbl.string("status").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("characters");
};
