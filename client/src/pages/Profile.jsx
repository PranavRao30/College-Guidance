import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();
  const backendPort = 'http://localhost:3000/';

  const handleLogout = async () => {
    localStorage.removeItem('token');
    navigate('/');

  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("Token: ", token);

    if (token) {
      axios.get(backendPort + 'api/user-details', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          setUserDetails(response.data);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    } else {
      console.error('Token not found in localStorage');
    }
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      {userDetails && (
        <div>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.username}</p>
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
