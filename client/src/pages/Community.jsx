import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/footer2';
import Navbar from '../components/navbar';
import SendIcon from '@mui/icons-material/Send';

const Community = () => {
    // const backendPort = 'http://localhost:3000';
    const backendPort = 'https://college-guidance-backend.onrender.com';
    const token = localStorage.getItem('token');
    const [userDetails, setUserDetails] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setnewMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(newMessage);
        if (!newMessage.trim()) {
            console.error('Message cannot be empty');
            return;
        }
        messages.push({ userId: userDetails._id, username: userDetails.name, message: newMessage });
        try {
            console.log(userDetails);
            await axios.post(`${backendPort}/messages/`, { userId: userDetails._id, username: userDetails.name, message: newMessage }, { headers: { Authorization: `Bearer ${token}` } });
            setnewMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            axios.get(`${backendPort}/api/user-details`, { headers: { Authorization: `Bearer ${token}` } })
                .then(response => {
                    console.log(userDetails);
                    setUserDetails(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user details:', error);
                });
        } else {
            console.error('Token not found in localStorage');
        }

        const fetchMessages = async () => {
            try {
                const response = await axios.get(`${backendPort}/messages/`, { headers: { Authorization: `Bearer ${token}` } });
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);


    return (
        <>
            <Navbar />
            <div className='min-h-screen flex flex-col justify-between pt-36 bg-[#DBEAFE]'>
                <div className='p-4'>
                    <ul className='list-none pb-24'>
                        {messages.map((msg) => (
                            <li key={msg._id} className={`mb-2 ${msg.userId === userDetails?._id ? 'text-right' : 'text-left'} text-wrap`}>
                                <span className={`inline-block p-2 rounded ${msg.userId === userDetails?._id ? 'bg-[#8BB3FF] text-black' : 'bg-gray-300'}`}>
                                    <strong>{msg.username}  </strong>
                                    <p className='mx-w-screen'>{msg.message}</p>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='p-4 fixed bottom-0 w-full bg-[#DBEAFE]'>
                    <form onSubmit={handleSubmit} className='flex items-center space-x-4'>
                        <textarea
                            value={newMessage}
                            onChange={(e) => setnewMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder='Type your message...'
                            className='flex-grow p-2 border rounded resize-none'
                        />
                        <button type="submit" className='px-4 py-2 bg-[#4B73FF] text-white rounded hover:bg-blue-900'><SendIcon /></button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Community;
