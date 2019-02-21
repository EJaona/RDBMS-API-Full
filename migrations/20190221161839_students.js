exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", tbl => {
    tbl.increments();
    tbl.string("name", 123).notNullable();
    tbl
      .integer("cohortId")
      .unsigned()
      .references("id")
      .inTable("cohort")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.timestamp(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
