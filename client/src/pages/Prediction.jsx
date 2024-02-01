import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer2';

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
      <div className='pred-bg-img'>
        <div className="text-white min-h-screen flex flex-col sm:flex-row items-center justify-center pt-[120px] bg-overlap">
          <img src="/Illustration1.png" className={`w-2/3 sm:w-1/2 ${collegeData.length ? 'hidden' : 'block'} sm:pr-20`}></img>
          <div className='flex flex-col'>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mb-8 ">
              <label className="mb-4 text-xl text-white font-medium">
                <p>Enter your rank:</p>
                <input
                  type="number"
                  name="num"
                  value={num}
                  onChange={handleChange}
                  className="border p-2 rounded-md bg-white text-black"
                  required
                />
              </label>
              <button
                type="submit"
                className="bg-[#DBEAFE] text-black p-3 rounded-[30px] border-4 hover:bg-transparent hover:text-[#DBEAFE] text-xl font-semibold"
              >
                Get College Recommendations
              </button>
            </form>
            <div className={`bg-[#DBEAFE] text-black w-screen sm:w-fit p-2 ${collegeData.length ? 'rounded' : 'hidden'}`}>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Prediction;
