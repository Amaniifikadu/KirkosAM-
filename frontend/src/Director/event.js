import React, { useEffect, useState } from 'react'

function Event() {
     const[events, setEvents] = useState([]);
     const [showForm, setShowForm] = useState(false);
      const [error, setError] = useState(null);

     const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
        location: '',
        description: ''
     });

     //fetch events from server
     const fetchEvents = async () => {
        const response = await fetch('/api/Event');
        const json = await response.json();
        if (response.ok) {
            setEvents(json);
        } else {
            setError(json.error);
        }
      };

      useEffect(() => {
        fetchEvents();
      }, []);

      //handle form input changes
      const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
      };

      //Create new event
      const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/Event', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const json = await response.json();
        if (response.ok) {
          setEvents([...events, json]);
          setFormData({
            title: '',
            date: '',
            time: '',
            location: '',
            description: ''
          });
          setShowForm(false);
        } else {
          setError(json.error);
        }
      };

       const handleDelete = async (id) => {
          const response = await fetch(`/api/Event/${id}`, {
            method: 'DELETE'
          });

          if (response.ok) {
            setEvents(events.filter(e => e._id !== id));
          } else {
            const json = await response.json();
            setError(json.error);
          }
        }

  return (
    <div className='EventContainer'>
        <h1>Events</h1>
      <button onClick={() => setShowForm(true)}>New Events</button>

      {showForm && (
        <div className='modal'> 
          <form className='modal-content' onSubmit={handleSubmit}>
            <h2>Create New Event</h2>
            <label>Title</label>
            <input type='text' name='title' value={formData.title} onChange={handleChange} required />
            <label>Date</label>
            <input type='date' name='date' value={formData.date} onChange={handleChange} required />
            <label>Time</label>
            <input type='time' name='time' value={formData.time} onChange={handleChange} required />
            <label>Location</label>
            <input type='text' name='location' value={formData.location} onChange={handleChange} required />
            <label>Description</label>
            <textarea name='description' value={formData.description} onChange={handleChange} required />
            <button type='submit'>Create Event</button>
            <button type='button' onClick={() => setShowForm(false)}>Cancel</button>
            {error && <div className='error'>{error}</div>}
          </form>
        </div>
      )}
          
  
      <table className='table'>
          <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
          </thead>

          <tbody>
              {events.map((e) => (
                <tr key={e._id}>
                  <td>{e.title}</td>
                  <td>{e.date}</td>
                  <td>{e.time}</td>
                  <td>{e.location}</td>
                  <td>{e.description}</td>
                  <td>
                    <button className='edit-btn'>Edit</button>
                    <button className='delete-btn' 
                    onClick={() => handleDelete(e._id)}
                    >Delete</button>
                  </td>
                </tr>
              )) }
          </tbody>
      </table>
    </div>
  )
}

export default Event
