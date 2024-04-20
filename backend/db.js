const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "shubham",
  password: "shubham",
  port: 3306,
  database: "mern",
  connectionLimit: 10,
});

module.exports = {
  pool,
};
/*
create table projectuser
(id integer primary key auto_increment,
full_name varchar(50),
email varchar(50),
password varchar(20),
phone_no varchar(10),
created_time DATETIME default CURRENT_TIMESTAMP
);

create table blogs(
id integer primary key auto_increment,
title varchar(20),
contents varchar(30),
created_time DATETIME default CURRENT_TIMESTAMP,
user_id integer,
FOREIGN KEY (user_id) REFERENCES projectuser(id),
category_id integer,
FOREIGN KEY (category_id) REFERENCES categories(id)
);

create table categories(
id integer primary key auto_increment,
title varchar(30),
description varchar(50)
);
*/