import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useYear } from "../context/YearContext"

function Agelgaydetails() {
 const [users, setUsers] = useState([]);
 const [error, setError] = useState(null);
 const [editId, setEditId] = useState(null); 
 const [editData, setEditData] = useState({});
 const [selectedrole, setSelectedrole] = useState('All Agelgays');
 const [roleLabel, setroleLabel] = useState('Filter by Role');
 const { year } = useYear();

  // ✅ Fetch all users
  const fetchUsers = async () => {
    const response = await fetch('https://kirkosam-backend.onrender.com/api/agelgayadd');
    const json = await response.json();

    if (response.ok) {
      setUsers(json);
    } else {
      setError(json.error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users
  .filter(user => String(user.year) === year)
  .filter(user =>
    selectedrole === 'All Agelgays'
      ? true
      : user.role === selectedrole )

  // ✅ Delete user
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this Agelgay?');
    if (!confirmDelete) return;

    const response = await fetch(`https://kirkosam-backend.onrender.com/api/agelgayadd/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      setUsers(users.filter(user => user._id !== id));
    }
  };

  const handleUpdate = async (id) => {
    const response = await fetch(`https://kirkosam-backend.onrender.com/api/agelgayadd/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editData)
    });

    if (response.ok) {
      setUsers(users.map(user => user._id === id ? { ...user, ...editData } : user));
      setEditId(null);
    }
  };

  return (
    <div className="container">
      <h2>Agelgay Details</h2>
       <div className="dropdown-container">
          
           <Dropdown className='dropdown'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {roleLabel}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item  onClick={() => { setSelectedrole('All Agelgays'); setroleLabel('All Agelgays'); }}>
                All Agelgays
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => { setSelectedrole("director"); setroleLabel("Director"); }}>
                Director
              </Dropdown.Item>
              <Dropdown.Item onClick={() => { setSelectedrole("ethics"); setroleLabel("Ethics"); }}>
                Ethics
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => { setSelectedrole("education"); setroleLabel("Education"); }}> 
                Education
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => { setSelectedrole("mezmur"); setroleLabel("Mezmur"); }}>
                Mezmur
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => { setSelectedrole("art"); setroleLabel("Art"); }}>
                Art
              </Dropdown.Item>
            </Dropdown.Menu>
           </Dropdown>
           </div>
      {error && <div className="error">{error}</div>}

      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Year</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
               <td>{editId === user._id ? (
                 <select
                    value={editData.year}    
                    onChange={(e) => setEditData({...editData, year: e.target.value})}
                  >
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    </select>
                ) : (
              user.year
              )}  </td>
              <td>
               {editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.firstname}
                    onChange={(e) => setEditData({...editData, firstname: e.target.value})}
                  />
                ) : (         
                  user.firstname
                )}
                </td>
              <td>
                 {editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.lastname}
                    onChange={(e) => setEditData({...editData, lastname: e.target.value})}
                  />
                ) : (         
                  user.lastname
                )}
              </td>
               <td>{editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.gender}
                    onChange={(e) => setEditData({...editData, gender: e.target.value})}
                  />
                ) : (
              user.gender)}</td>
              <td>
                 {editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.username}
                    onChange={(e) => setEditData({...editData, username: e.target.value})}
                  />
                ) : (         
                  user.username
                )}

              </td>
              <td>{editId === user._id ? (
                <select
                    value={editData.role}    
                    onChange={(e) => setEditData({...editData, role: e.target.value})}
                  >
                    <option value="director">Director</option>
                    <option value="ethics">Ethics</option>
                   <option value="education">Education</option>
                   <option value="mezmur">Mezmur</option>
                    <option value="art">Art</option>
                    </select>
                ) : (
              user.role
              )}
              </td>
              <td>
                <div className="action-buttons">
                {editId === user._id ? (
                  <>
                    <button className="save-btn" onClick={() => {
                      handleUpdate(user._id);
                    }}>
                      Save
                    </button>
                    <button className="cancel-btn" onClick={() => {
                      setEditId(null);
                    }}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button className="edit-btn" 
                   onClick={() => {
                    setEditId(user._id);
                    setEditData(user);
                   }}>
                    Edit
                  </button>
                )}
                <button 
                  className="delete-btn"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
                </div>
              </td>
            </tr>
          ))}

          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan="8" className="text-center">
                No Agelgays found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Agelgaydetails
