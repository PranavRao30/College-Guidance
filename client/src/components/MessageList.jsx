import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const backendPort = 'http://localhost:3000';
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchMessages = async () => {
            axios.get(`${backendPort}/messages/`, { headers: { Authorization: `Bearer ${token}` } })
            setMessages(response.data);
        };

        fetchMessages();
    }, []);

    return (
        <div>
            <h2>Community Messages</h2>
            <ul>
                {messages.map((msg) => (
                    <li key={msg._id}>
                        <strong>{msg.username}:</strong> {msg.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;
