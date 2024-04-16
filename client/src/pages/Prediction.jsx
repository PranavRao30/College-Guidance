import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer2';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Prediction = () => {
  const backendPort = 'https://college-guidance-backend.onrender.com';
  // const backendPort = 'http://localhost:3000';
  const [form, setForm] = useState({});
  const [collegeData, setCollegeData] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm((prevValue) => ({
      ...prevValue,
      [name]: value,
    }))
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(`${backendPort}/api/getCollege`, { input: form });
    console.log(form);
    setCollegeData(response.data);
  };

  const [userDetails, setUserDetails] = useState(null);
  const [bookmarkedColleges, setBookmarkedColleges] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.get(`${backendPort}/api/user-details`, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          setUserDetails(response.data);
          const bookmarkedColleges = response.data.collegeData.map(bookmark => ({
            college: bookmark.college,
            branch: bookmark.branch,
            category: bookmark.category,
          }));
          setBookmarkedColleges(bookmarkedColleges);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    } else {
      console.error('Token not found in localStorage');
    }
  }, []);

  const isBookmarked = (college) => {
    return !!bookmarkedColleges.find(bookmark =>
      bookmark.college === college[2] &&
      bookmark.branch === college[1] &&
      bookmark.category === form.cat
    );
  };


  const handleBookmark = async (college) => {
    const token = localStorage.getItem('token');
  
    try {
      let updatedBookmarks;
      if (college.remove) {
        updatedBookmarks = bookmarkedColleges.filter(
          bookmark => !(bookmark.college === college.college && bookmark.branch === college.branch && bookmark.category === form.cat)
        );
      } else {
        updatedBookmarks = [...bookmarkedColleges, { college: college.college, branch: college.branch, category: form.cat }];
      }
  
      setBookmarkedColleges(updatedBookmarks);
  
      if (token) {
        const response = await axios.post(
          `${backendPort}/api/bookmark`,
          { college },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('Bookmark added:', response.data);
      } else {
        console.error('Token not found in localStorage');
      }
    } catch (error) {
      console.error('Error updating bookmark:', error);
    }
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
                  value={form.num || ""}
                  onChange={handleChange}
                  className="border p-2 rounded-md bg-white text-black"
                  required
                />
                <select
                  name="cat"
                  value={form.cat || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-white text-black p-2"
                  required
                >
                  <option value="" disabled>Select Category</option>
                  <option value="GM">GM</option>
                  <option value="GMR">GMR</option>
                  <option value="GMK">GMK</option>
                  <option value="1G">1G</option>
                  <option value="1K">1K</option>
                  <option value="1R">1R</option>
                  <option value="2AG">2AG</option>
                  <option value="2AK">2AK</option>
                  <option value="2AR">2AR</option>
                  <option value="2BG">2BG</option>
                  <option value="2BR">2BR</option>
                  <option value="3AG">3AG</option>
                  <option value="3AK">3AK</option>
                  <option value="3AR">3AR</option>
                  <option value="3BG">3BG</option>
                  <option value="3BK">3BK</option>
                  <option value="3BR">3BR</option>
                  <option value="SCG">SCG</option>
                  <option value="SCK">SCK</option>
                  <option value="SCR">SCR</option>
                  <option value="STG">STG</option>
                  <option value="STK">STK</option>
                  <option value="STR">STR</option>
                </select>
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
                      {userDetails && <th className="m-2 p-2 font-semibold text-lg">Bookmark</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {collegeData.map((college, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'} text-black`}>
                        <td className="m-2 p-2">{college[0]}</td>
                        <td className="m-2 p-2">{college[1]}</td>
                        <td className="m-2 p-2">{college[2]}</td>
                        {userDetails && (
                          <td className="m-2 p-2">
                            {isBookmarked(college) ? (
                              <button onClick={() => handleBookmark({ college: college[2], branch: college[1], category: form.cat, rank: college[0], remove: true })} >
                                <BookmarkIcon />
                              </button>
                            ) : (
                              <button onClick={() => handleBookmark({ college: college[2], branch: college[1], category: form.cat, rank: college[0], remove: false })} >
                                <BookmarkBorderIcon />
                              </button>
                            )}
                          </td>
                        )}
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
