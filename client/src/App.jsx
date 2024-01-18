import React, { useState } from 'react';
import 'axios';
import axios from 'axios';

const App = () => {

  const backendPort = 'http://localhost:3000'
  var [num, setNum] = useState(null);
  var [collegeData, setCollegeData] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setNum(value);
    console.log(num);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(num);
    const data = await axios.post(`${backendPort}/api/getCollege`, { num: num });
    setCollegeData(data.data);
    console.log(collegeData);
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center' >
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label>
          Rank:
          <input type='number' name='num' value={num} onChange={handleChange} required />
        </label>
        <button type='submit'>Submit</button>
      </form>
      <div>
        <ul>
          {collegeData.map((college) => (
            <li>{college}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
