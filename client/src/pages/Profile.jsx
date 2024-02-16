import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Retrieve token from wherever it is stored
    const token = localStorage.getItem('token');
    console.log(token);

    if (token) {
      // Make an authenticated request to the server to get user details
      axios.get('/api/user-details', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          setUserDetails(response.data);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    } else {
      // Handle the case where the token is not found
      console.error('Token not found in localStorage');
    }
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      {userDetails && (
        <div>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          {/* Include other user details */}
        </div>
      )}
    </div>
  );
};

export default Profile;
