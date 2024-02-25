import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer2';
import ProfileCard from '../components/profileCard';

const Profile = () => {
  const backendPort = 'http://localhost:3000';

  const [userDetails, setUserDetails] = useState(null);
  const [bookmarkedColleges, setBookmarkedColleges] = useState([]);

  const navigate = useNavigate();

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
            cutoff: bookmark.rank,
          }));
          setBookmarkedColleges(bookmarkedColleges);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    } else {
      console.error('Token not found in localStorage');
      localStorage.removeItem('token');
      navigate('/login');
    }
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem('token');
    navigate('/');

  }

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
      updatedBookmarks = bookmarkedColleges.filter(
        bookmark => !(bookmark.college === college.college && bookmark.branch === college.branch && bookmark.category === college.category)
      );

      setBookmarkedColleges(updatedBookmarks);

      if (token) {
        const response = await axios.post(
          `${backendPort}/api/bookmark/remove`,
          { college },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('Bookmark removed:', response.data);
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
      <div className="bg-[#8BB3FF] min-h-screen p-8 pt-36">
        <div className="name bg-[#DBEAFE] rounded-2xl p-5 mb-8 text-center">
          <h2 className="font-cursive font-semibold text-4xl">
            {userDetails && userDetails.name}'s Wishlist
          </h2>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-10'>
          {bookmarkedColleges.map((bookmark, index) => (
            <ProfileCard key={index} props={bookmark} handleBookmark={handleBookmark} />
          ))}
        </div>
        <div className='absolute bottom-4 flex justify-center align-center mx-[45%]'>
        <button onClick={handleLogout} className='text-center bg-[#DBEAFE] p-2 rounded font-bold text-xl'>Logout</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
