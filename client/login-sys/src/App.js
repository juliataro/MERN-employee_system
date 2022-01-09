import './App.css';
import {useState} from "react";


function App() {

  // Variables to work with frontend data
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState("")
  const [position, setPosition] = useState("")
  const [wage, setWage] = useState(0)

  // const displayInfo = () => {
  //   console.log(name + age + country + position + wage)
  // };

  // Frontend part and each input has a hook to catch an event
  return (
    <div className="App">
      <div className="information">
      <label>Name:</label>
      <input type="text" onChange={(event) => {setName(event.target.value);}}/>
      <label>Age:</label>
      <input type="number" onChange={(event) => {setName(event.target.value);}} />
      <label>Country:</label>
      <input type="text" onChange={(event) => {setName(event.target.value);}} />
      <label>Position</label>
      <input type="text" onChange={(event) => {setName(event.target.value);}} />
      <label>Wage (year):</label>
      <input type="number" onChange={(event) => {setName(event.target.value);}} />

      {/* <button onClick={displayInfo}>Add Employee</button> */}
      <button>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
