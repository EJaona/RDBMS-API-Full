exports.up = function(knex, Promise) {
  return knex.schema.createTable("cohort", tbl => {
    tbl.increments();
    tbl
      .string("name", 123)
      .notNullable()
      .unique();
    tbl.timestamp(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.dropTableIfExists("cohort");
};
