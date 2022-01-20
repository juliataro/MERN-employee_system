// node index.js - command to run express in browser

const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

// Allowing to make calls from frontend to backand api
app.use(cors());
app.use(express.json());

// Constant for DabaBase
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "juliataro0891",
  database: "employee_sys",
});

/**
*  POST request new user route with (req, res) variables and in
function variables that we take from frontend
*/
app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  // Inserting data into DB
  db.query(
    "INSERT INTO employee (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

/**
*  TODO display employees from DB with GET request route with (req, res) variables and in
function variables that we take from frontend, 
*/
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employee", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Listening for port cheking if serfer running, in terminal command: run indexjs
app.listen(3003, () => {
  console.log("your server is runnig on port 3003");
  db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
});
