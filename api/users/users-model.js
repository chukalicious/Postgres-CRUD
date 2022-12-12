const knex = require("knex");
const config = require("../../knexfile.js");
const db = knex(config.development);

module.exports = {
  get,
  getByID,
  add,
  remove,
  update,
  // findDogs,
};

function get(query) {
  const { page = 1, limit = 2, sortby = "id", sortdir = "asc" } = query;
  const offset = limit * (page - 1);

  const rows = db("users").orderBy(sortby, sortdir).limit(limit).offset(offset);

  return rows;
}

function getByID(id) {
  return db("users").where({ id }).first();
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return getById(id);
}

function remove(id) {
  return db("users").where({ id }).del();
}

function update(id, changes) {
  return db("users").where({ id }).update(changes, "*");
}

// function findDogs(adopterId) {
//   return db("adopters as a")
//     .join("dogs as d", "a.id", "d.adopter_id")
//     .select("a.id", "a.name", "a.email", "d.id as dog_id", "d.name as dog_name")
//     .where({ "a.id": adopterId });
// }
