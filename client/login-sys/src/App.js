// https://www.youtube.com/watch?v=3K347USUIm8&list=PLVfMKQXDAhGURizWJ7EGvJfvYO0rGap_z&index=6

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

function App() {
  // Variables to work with frontend data
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  // Hook for displaying data from DB, and will store our information in a list
  const [employeeList, setEmployeeList] = useState([]);

  // Axios to make POST request funktion on Add employee Button
  // And sending object with budy, in which properties> name..
  const addEmployee = () => {
    Axios.post("http://localhost:3003/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      console.log("success");
    });
  };

  // Function to get employees from DB
  const getEmployees = () => {
    Axios.get("http://localhost:3003/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  // Frontend part and each input has a hook to catch an event
  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage (year):</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />

        {/* <button onClick={displayInfo}>Add Employee</button> */}
        <button variant="primary" onClick={addEmployee}>
          Add Employee
        </button>
        <Button variant="primary">Primary</Button>
      </div>

      {/* The line before the data fetched from DB */}

      <hr
        style={{
          color: "#ed1515",
          backgroundColor: "#ed1515",
          height: 0.5,
          marginTop: "30px",
          width: 300 + "px",
        }}
      />

      {/* Button for showing employees */}
      <div className="employees">
        <button onClick={getEmployees}>Show employees</button>
        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <h3>Name: {val.name}</h3>
              <h3>Age: {val.age}</h3>
              <h3>Country: {val.country}</h3>
              <h3>Position: {val.position}</h3>
              <h3>Wage: {val.wage}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
