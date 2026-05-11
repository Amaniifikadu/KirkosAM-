import React, { useEffect, useState } from 'react'

function Ethicsevents() {
const[events, setEvents] = useState([]);
const [error, setError] = useState(null);


     //fetch events from server
     const fetchEvents = async () => {
        const response = await fetch('https://kirkosam-backend.onrender.com/api/Event');
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

      //Create new event

  return (
    <div className='EventContainer'>
        <h2>Events 📅</h2>
        {error && <div className='error'>{error}</div>}
      <table className='table'>
          <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Description</th>
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
                </tr>
              )) }
              
          </tbody>
      </table>
    </div>
  )
}

export default Ethicsevents
