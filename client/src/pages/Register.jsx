import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer2';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {

  var [form, setForm] = useState({});
  const navigate = useNavigate();
  var [message, setMessage] = useState("");
  const backendPort = 'http://localhost:3000/'; 
  // const backendPort = 'https://college-guidance-backend.onrender.com';

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    try {
      const { data } = await axios.post(backendPort + 'auth/register', form)
      if (data.error) {
        console.log(data.error);
        setMessage(data.error);
      } else {
        setForm({});
        console.log('Login Successful');
        localStorage.setItem('token', data.token);
        navigate(`/profile`);
      }
    }
    catch (err) {
      setMessage(err);
      console.log(err);
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-[#DBEAFE]">
        <div className="bg-white p-8 rounded-4 drop-shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-[#8BB3FF] text-center">Sign Up</h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="name" className="text-sm font-medium text-gray-600 mb-2">
              Name:
            </label>
            <input type="name" name="name" id="name" value={form.name} onChange={handleChange} className="bg-blue-100 p-2 rounded mb-4" />
            <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-2">
              Email:
            </label>
            <input type="email" name="email" id="email" value={form.email} onChange={handleChange} className="bg-blue-100 p-2 rounded mb-4" />

            <label htmlFor="password" className="text-sm font-medium text-gray-600 mb-2">
              Password:
            </label>
            <input type="password" name="password" id="password" value={form.password} onChange={handleChange} className="bg-blue-100 p-2 rounded mb-4" />
            <label htmlFor="password" className="text-sm font-medium text-gray-600 mb-2">
              Confirm Password:
            </label>
            <input type="password" name="confpassword" id="confpassword" value={form.confpassword} onChange={handleChange} className="bg-blue-100 p-2 rounded mb-4" />

            <button type="submit" className="btn bg-[#8BB3FF] text-white hover:bg-gray-800 mb-4 p-2 font-semibold">
              SUBMIT
            </button>
          </form>
          <p className='text-[#ff0000] text-center'>{message}</p>
          <p className='text-center'>Already registered? <Link to='/login'><span className='text-blue-500 hover:underline'>Login Here</span></Link></p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;
