exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("characters")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("characters").insert([
        { id: 1, name: "Rick Sanchez", gender: "male", status: "alive" },
        { id: 2, name: "Morty Smith", gender: "male", status: "alive" },
        { id: 3, name: "Summer Smith", gender: "female", status: "alive" },
      ]);
    });
};
