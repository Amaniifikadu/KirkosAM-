import React, { useEffect, useState } from 'react'

function Notice() {
   const [notices, setNotices] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  // Fetch notices
  const fetchNotices = async () => {
    const res = await fetch('/api/notice/notices');
    const data = await res.json();
    if (res.ok) setNotices(data);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // Create notice
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/notice/notices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, message })
    });

    const data = await res.json();

    if (res.ok) {
      setNotices([data, ...notices]);
      setTitle('');
      setMessage('');
      setShowForm(false);
    }
  };

  // Delete notice
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this notice?")) return;

    const res = await fetch(`/api/notice/notices/${id}`, {
      method: "DELETE"
    });

    if (res.ok) {
      setNotices(notices.filter(n => n._id !== id));
    }
  };


  return (
    <div className="notice-container">
       <h2>Notice Board 📢</h2>

      <button onClick={() => setShowForm(true)}>Add Notice</button>

      {/* Popup Form */}
      {showForm && (
        <div className="modal">
          <form className="modal-content" onSubmit={handleSubmit}>
            <h3>Create Notice</h3>

            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" >Post</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}

      {/* Notice List */}
      <div className="notice-list">
        {notices.map(n => (
          <div key={n._id} className="notice-card">
            <h3>{n.title}</h3>
            <p>{n.message}</p>
            <button onClick={() => handleDelete(n._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notice
