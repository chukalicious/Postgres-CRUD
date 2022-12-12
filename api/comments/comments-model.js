const knex = require("knex");
const config = require("../../knexfile.js");
const db = knex(config.development);

module.exports = {
  find,
  add,
};

function find() {
  return db("comments");
}

function add(comment) {
  return db("comments")
    .insert(comment)
    .into("comments")
    .then((comment) => {
      return comment;
    });
}
