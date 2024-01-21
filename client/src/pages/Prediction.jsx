import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';

const Prediction = () => {
  const backendPort = 'http://localhost:3000';
  const [num, setNum] = useState(null);
  const [collegeData, setCollegeData] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setNum(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(`${backendPort}/api/getCollege`, { num: num });
    setCollegeData(response.data);
  };

  return (
    <>
      <Navbar />
      <div className="bg-blue-200 text-white min-h-screen flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center mb-8">
          <label className="mb-4 text-lg text-black">
            Enter your rank:
            <input
              type="number"
              name="num"
              value={num}
              onChange={handleChange}
              className="border p-2 rounded-md mx-2 bg-white"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:ring focus:border-blue-300"
          >
            Get College Recommendations
          </button>
        </form>
        <div>
          <ul className="text-lg">
            {collegeData.map((college, index) => (
              <li key={index} className="mb-2 text-black">
                {college}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Prediction;