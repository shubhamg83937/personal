const express = require("express");
const db = require("../db");
const utils = require("../utils");
const router = express.Router();

router.post("/addblog", (request, response) => {
  const { title, contents, user_id, category_id } = request.body;

  const query = `insert into blogs (title, contents,  user_id, category_id ) values (?,?,?,?);`;
  db.pool.execute(
    query,
    [title, contents, user_id, category_id],
    (error, result) => {
      response.send(utils.createResult(error, result));
    }
  );
});

router.get("/myblogs", (request, response) => {
  const statement = `select title, contents, created_time, user_id, category_id from categories;`;
  db.pool.query(statement, (error, properties) => {
    response.send(utils.createResult(error, properties));
  });
});



router.delete("/deleteblog", (request, response) => {
  const { id } = request.params;
  const statement = `DELETE FROM blogs WHERE user_id = ?;`;
  db.pool.query(statement, [id], (error, properties) => {
    response.send(utils.createResult(error, properties[0]));
  });
});



module.exports = router;
