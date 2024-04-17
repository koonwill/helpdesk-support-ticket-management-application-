import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tickets.css';

function Tickets() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get('http://localhost:5173/api/tickets/all');
                setTickets(response.data);
            } catch (error) {
                console.error('Failed to get tickets: ', error);
            }
        };

        fetchTickets();
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    return (
        <div className="tickets-container">
            <h1 className="tickets-title">Tickets</h1>
            <div className="tickets">
                {tickets.map(ticket => (
                    <div className="ticket">
                        <h2>{ticket.title}</h2>
                        <p>{ticket.description}</p>
                        {/* Add more ticket details here */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tickets;
