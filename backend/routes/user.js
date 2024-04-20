const express = require("express");
const db = require("../db");
const utils = require("../utils");
const router = express.Router();

router.post("/register", (request, response) => {
  const { full_name, email, password, phone_no } = request.body;
  const statement = `insert into projectuser (full_name, email, password, phone_no) values (?, ?, ?, ?);`;
  db.pool.execute(
    statement,
    [full_name, email, password, phone_no],
    (error, result) => {
      response.send(utils.createResult(error, result));
    }
  );
});

router.get("/login", (request, response) => {
  const { email, password } = request.body;
  const statement = `select email, password from projectuser where email = ? and password = ?`;
  db.pool.query(statement, [email, password], (error, users) => {
    if (error) {
      response.send(utils.createErrorResult(error));
    } else {
  
        response.send(utils.createSuccessResult(users));
      }
    })
  
});


module.exports = router;
