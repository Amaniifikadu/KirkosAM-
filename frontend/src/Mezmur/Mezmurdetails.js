import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react'

function MezmurDetails() {
const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
const [selectedIdentifier, setSelectedIdentifier] = useState('All Identifiers');
  // ✅ Fetch all users
  const fetchUsers = async () => {
    const response = await fetch('/api/mezmurregister');
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

   const filteredUsers = 
            selectedIdentifier === 'All Identifiers' ? 
            users : 
            users.filter(user => user.identifier === selectedIdentifier);

  // ✅ Delete user
  const handleDelete = async (id) => {
    const response = await fetch(`/api/mezmurregister/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      setUsers(users.filter(user => user._id !== id));
    }      
  };


  return (
    <div className='StudentDetails-container'>
           <h2>Student Details</h2>
           <Dropdown className='dropdown'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter by Identifier
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item  onClick={() => setSelectedIdentifier('All Identifiers')}>
                All Identifiers
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedIdentifier('መዘምራን')}>
                መዘምራን 
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => setSelectedIdentifier('የል/ክ/ጊዜ')}>
                የል/ክ/ጊዜ 
              </Dropdown.Item>
            </Dropdown.Menu>
           </Dropdown>

      {error && <div className="error">{error}</div>}

      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Father Name</th>
            <th>GrandFather Name</th>
            <th>Christian Name</th>
            <th>Identifier</th>
            <th>Gender</th>
              <th>Age</th>
              <th>Grade</th>
              <th>District</th>
              <th>House Number</th>
              <th>Parent Name</th>
              <th>Parent Phone 1</th>
              <th>Parent Phone 2</th>
            <th>Actions</th>
          </tr>
        </thead>


        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.fatherName}</td>
              <td>{user.grandFatherName}</td>
              <td>{user.christianName}</td>
              <td>{user.identifier}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.grade}</td>
              <td>{user.district}</td>
              <td>{user.houseNumber}</td>
              <td>{user.parentName}</td>
              <td>{user.parentPhone1}</td>
              <td>{user.parentPhone2}</td>
              <td>
                <button className="edit-btn" 
                >Edit</button>
                <button 
                  className="delete-btn"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          
          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan="13" className="text-center">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MezmurDetails
