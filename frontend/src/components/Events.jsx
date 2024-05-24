import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({
        title: '',
        date: '',
        location: ''
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/events/');
            console.log('Response:', response);  // Log the entire response
            if (Array.isArray(response.data)) {
                setEvents(response.data);
            } else {
                console.error('API response is not an array:', response.data);
                setEvents([]);  // Set to empty array in case of unexpected response
            }
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const addEvent = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/events/', newEvent);
            setNewEvent({ title: '', date: '', location: '' });
            fetchEvents();
        } catch (error) {
            console.error('Error adding event:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEvent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <h1>Events List</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        {event.title} - {event.date} - {event.location}
                    </li>
                ))}
            </ul>
            <form onSubmit={addEvent}>
                <input
                    type="text"
                    name="title"
                    value={newEvent.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    type="date"
                    name="date"
                    value={newEvent.date}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="location"
                    value={newEvent.location}
                    onChange={handleChange}
                    placeholder="Location"
                />
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default Events;
