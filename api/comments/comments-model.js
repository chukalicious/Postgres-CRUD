const knex = require("knex");
const config = require("../../knexfile.js");
const db = knex(config.development);

module.exports = {
  get,
  getByID,
  add,
};

function get() {
  return db("comments");
}

function getByID(id) {
  return db("comments").where({ id }).first();
}

function add(comment) {
  return db("comments")
    .insert(comment)
    .into("comments")
    .then((comment) => {
      return comment;
    });
}
