// components/MessageForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageForm = ({ userDetails }) => {
    const backendPort = 'http://localhost:3000';
    const token = localStorage.getItem('token');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(userDetails);
            await axios.post(`${backendPort}/messages/`, { username: userDetails.name, message }, { headers: { Authorization: `Bearer ${token}` } });
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: {userDetails && userDetails.name}
                </label>
                <br />
                <label>
                    Message:
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default MessageForm;
