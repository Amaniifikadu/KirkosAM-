import React, { useEffect, useState } from 'react'

function Ethicsnotice() {
   const [notices, setNotices] = useState([]);

  // Fetch notices
  const fetchNotices = async () => {
    const res = await fetch('https://kirkosam-backend.onrender.com/api/notice/notices');
    const data = await res.json();
    if (res.ok) setNotices(data);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // Create notice

  return (
    <div className="notice-container">
       <h2>Notice Board 📢</h2>

      {/* Notice List */}
      <div className="notice-list">
        {notices.map(n => (
          <div key={n._id} className="notice-card">
            <h3>{n.title}</h3>
            <p>{n.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ethicsnotice
