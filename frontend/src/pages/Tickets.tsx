import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlusIcon from '../assets/PlusIcon';

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

    const onDragEnd = (result) => { };


    return (
        <div
            className="
          m-auto
          flex
          min-h-screen
          w-full
          items-center
          overflow-x-auto
          overflow-y-hidden
          px-[40px]
      "
        >
            <div className="m-auto flex gap-4">
                <div className="add-tickets-bttn">
                    <button className="
                    h-[60px]
                    w-[350px]
                    min-w-[350px]
                    cursor-pointer
                    rounded-lg
                    bg-mainBackgroundColor
                    border-2
                    border-columnBackgroundColor
                    p-4
                    ring-rose-500
                    hover:ring-2
                    gap-2
                    flex
                    "
                    >
                        <PlusIcon  />
                        Add Ticket
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Tickets;
