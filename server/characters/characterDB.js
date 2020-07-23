const db = require("../../database/dbConfig");

function find() {
  return db("characters");
}

module.exports = { find };
