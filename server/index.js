const express = require('express');
const app = express();
const mysql = require('mysql');

// Constant for DabaBase
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "juliataro0891",
    database: "employeeSystem"
});

/**
*  Post new user route with req res variables and in
function variables that we take from frontend
*/ 
app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    // Inserting data into DB
    db.query(
        'INSERT INTO empleeys (name, age, country, position, wage) VALUES (?,?,?,?,?)', 
        [name, age, country, position, wage], 
        (err, result) => {
            if(err) {
                console.error(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});


// Listening for port cheking if serfer running, in terminal command: run indexjs
app.listen(3001, () =>{
    console.log('your server is runnig on port 3001')
})