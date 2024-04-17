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
    }, []);

    const onDragEnd = (result) => {};


    return (
        <div className="tickets-container">
            <h1 className="tickets-title">Tickets</h1>
            <div className="tickets">
                {tickets.map(ticket => (
                    <div key={tickets._id} className="ticket">
                        <h2>{ticket.title}</h2>
                        <p>{ticket.description}</p>
                        <p>{ticket.contact}</p>
                        <p>{ticket.information}</p>
                        <p>{ticket.created_date}</p>
                        <p>{ticket.updated_date}</p>
                        <p>{ticket.status}</p>
                        {/* Add more ticket details here */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tickets;
