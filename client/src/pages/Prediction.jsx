import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';

const Prediction = () => {
  const backendPort = 'https://college-guidance-backend.onrender.com';
  // const backendPort = 'http://localhost:3000';
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
      <div className="bg-blue-200 text-white min-h-screen flex flex-col items-center justify-center pt-[120px]">
        <form onSubmit={handleSubmit} className="flex flex-col items-center mb-8">
          <label className="mb-4 text-lg text-black font-medium">
            <p>Enter your rank:</p>
            <input
              type="number"
              name="num"
              value={num}
              onChange={handleChange}
              className="border p-2 rounded-md bg-white"
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
        <div className={`bg-blue-500 text-white w-full sm:w-fit p-2 ${collegeData.length ? 'rounded' : 'hidden'}`}>
          <div className="overflow-x-auto">
            <table className="w-full text-md">
              <thead>
                <tr>
                  <th className="m-2 p-2 font-semibold text-lg">Cutoff</th>
                  <th className="m-2 p-2 font-semibold text-lg">Branch</th>
                  <th className="m-2 p-2 font-semibold text-lg">College</th>
                </tr>
              </thead>
              <tbody>
                {collegeData.map((college, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'} text-black`}>
                    <td className="m-2 p-2">{college[0]}</td>
                    <td className="m-2 p-2">{college[1]}</td>
                    <td className="m-2 p-2">{college[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prediction;
