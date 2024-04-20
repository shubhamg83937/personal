const express = require("express");
const db = require("../db");
const utils = require("../utils");

const router = express.Router();

router.get("/", (request, response) => {
  const statement = `select  title, description from categories;`;
  db.pool.query(statement, (error, categories) => {
    response.send(utils.createResult(error, categories));
  });
});

router.post("/add", (request, response) => {
  const { title, description } = request.body;

  const query = `insert into categories ( title, description) values (?,?);`;
  db.pool.execute(query, [title, description], (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

router.delete("/", (request, response) => {
  const { id } = request.params;
  const statement = `DELETE FROM categories WHERE user_id = ?;`;
  db.pool.query(statement, [id], (error, properties) => {
    response.send(utils.createResult(error, properties[0]));
  });
});



module.exports = router;
