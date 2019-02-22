exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { name: "Enoka", cohortId: 1 },
        { name: "Byron", cohortId: 2 },
        { name: "Kelly", cohortId: 3 }
      ]);
    });
};
