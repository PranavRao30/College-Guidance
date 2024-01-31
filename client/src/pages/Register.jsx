import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-blue-500 text-center">Sign Up</h2>
        <form className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-600 mb-2">
            Name:
          </label>
          <input type="name" id="name" className="bg-blue-100 p-2 rounded mb-4" />
          <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-2">
            Email:
          </label>
          <input type="email" id="email" className="bg-blue-100 p-2 rounded mb-4" />

          <label htmlFor="password" className="text-sm font-medium text-gray-600 mb-2">
            Password:
          </label>
          <input type="password" id="password" className="bg-blue-100 p-2 rounded mb-4" />
          <label htmlFor="password" className="text-sm font-medium text-gray-600 mb-2">
            Confirm Password:
          </label>
          <input type="password" id="password" className="bg-blue-100 p-2 rounded mb-4" />

          <button type="submit" className="btn bg-blue-800 text-white hover:bg-gray-800 mb-4 p-2 text-semibold">
            SUBMIT
          </button>
        </form>
        <p className='text-center'>Already registered? <Link to='/login'><span className='text-blue-500 hover:underline'>Login Here</span></Link></p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SignupPage;