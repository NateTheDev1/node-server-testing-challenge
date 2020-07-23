const db = require("../../database/dbConfig");

function find() {
  return db("characters");
}

function create(character) {
  return db("characters").insert(character);
}

function remove(charName) {
  return db("characters").del().where({ name: charName });
}

module.exports = { find, create, remove };
