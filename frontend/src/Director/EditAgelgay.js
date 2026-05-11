import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditAgelgay() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  // ✅ Load user data
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://kirkosam-backend.onrender.com/api/agelgayadd`);
      const data = await res.json();

      const user = data.find(u => u._id === id);

      if (user) {
        setFirstname(user.firstname);
        setLastname(user.lastname);
        setUsername(user.username);
        setRole(user.role);
      }
    };

    fetchUser();
  }, [id]);

  // ✅ Update user
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      firstname,
      lastname,
      username,
      role
    };

    const res = await fetch(`https://kirkosam-backend.onrender.com/api/agelgayadd/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (res.ok) {
      navigate('/agelgaydetails');
    }
  };

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <h3>Edit Agelgay</h3>

        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
        <input value={username} onChange={(e) => setUsername(e.target.value)} />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="director">Director</option>
          <option value="ethics">Ethics</option>
          <option value="education">Education</option>
          <option value="mezmur">Mezmur</option>
          <option value="art">Art</option>
        </select>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditAgelgay;