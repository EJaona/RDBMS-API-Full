exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cohort")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cohort").insert([
        { name: "Web16" },
        { name: "iOS3" },
        { name: "Android2" }
      ]);
    });
};
