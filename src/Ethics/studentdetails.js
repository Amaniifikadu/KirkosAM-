import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react'
import { useYear } from "../context/YearContext"
import { FaImage } from "react-icons/fa";

function StudentDetails() {
const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
const [selectedMdb, setSelectedMdb] = useState('All Mdbs');
const [editId, setEditId] = useState(null);
const [editData, setEditData] = useState({});
const [mdbLabel, setMdbLabel] = useState('Filter by Mdb');
const { year } = useYear();
const [selectedImage, setSelectedImage] = useState(null);
const [feeFilter, setFeeFilter] = useState("all")

  // ✅ Fetch all users
  const fetchUsers = async () => {
    const response = await fetch('https://kirkosam-backend.onrender.com/api/register/studentregister');
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
    selectedMdb === 'All Mdbs'
      ? true
      : user.mdb === selectedMdb )
  .filter(user => {
    const fee = Number(user.fee);

    if (feeFilter === 'low') return fee <= 200;
    if (feeFilter === 'high') return fee > 200;
    return true;
  });

  // ✅ Delete user
  const handleDelete = async (id) => {
   const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (!confirmDelete) return;

    const response = await fetch(`https://kirkosam-backend.onrender.com/api/register/studentregister/${id}`, {
      method: 'DELETE'
      
    });

    if (response.ok) {
      setUsers(users.filter(user => user._id !== id));
    }      
  };

  // ✅ Update user
  const handleUpdate = async (id) => {
    const response = await fetch(`https://kirkosam-backend.onrender.com/api/register/studentregister/${id}`, {
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

  const handleShowImage = (img) => {
  setSelectedImage(img);
  
 };

  return (
    <div className='StudentDetails-container'>
       <h2>Student Details</h2>
      <div className="dropdown-container">
          
           <Dropdown className='dropdown'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {mdbLabel}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item  onClick={() => { setSelectedMdb('All Mdbs'); setMdbLabel('All Mdbs'); }}>
                All Mdbs
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => { setSelectedMdb("ቂርቆስ"); setMdbLabel("ቂርቆስ 0"); }}>
                ቂርቆስ 0
              </Dropdown.Item>
              <Dropdown.Item onClick={() => { setSelectedMdb("ማቴዎስ"); setMdbLabel("ማቴዎስ 1"); }}>
                ማቴዎስ 1
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => { setSelectedMdb("ማርቆስ"); setMdbLabel("ማርቆስ 2"); }}> 
                ማርቆስ 2
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => { setSelectedMdb("ሉቃስ"); setMdbLabel("ሉቃስ 3"); }}>
                ሉቃስ 3
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => { setSelectedMdb("ዮሐንስ"); setMdbLabel("ዮሐንስ 4"); }}>
                ዮሐንስ 4
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => { setSelectedMdb("ዳንኤል"); setMdbLabel("ዳንኤል 5"); }}>
                ዳንኤል 5
              </Dropdown.Item>
              <Dropdown.Item onClick={() => { setSelectedMdb("ሕዝቅኤል"); setMdbLabel("ሕዝቅኤል 6"); }}>
                ሕዝቅኤል 6
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => { setSelectedMdb("ኤርምያስ"); setMdbLabel("ኤርምያስ 7"); }}>
                ኤርምያስ   7
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => { setSelectedMdb("ኢሳይያስ"); setMdbLabel("ኢሳይያስ 8"); }}>
                ኢሳይያስ 8
              </Dropdown.Item>
              <Dropdown.Item onClick={() => { setSelectedMdb("ጴጥሮስ"); setMdbLabel("ጴጥሮስ 9"); }}>
                ጴጥሮስ 9
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => { setSelectedMdb("ጳውሎስ"); setMdbLabel("ጳውሎስ 10"); }}>
                ጳውሎስ 10
              </Dropdown.Item>
            </Dropdown.Menu>
           </Dropdown>

      {error && <div className="error">{error}</div>}
           
      <Dropdown>
        <Dropdown.Toggle variant="primary">
           Filter by Fee
           </Dropdown.Toggle>

           <Dropdown.Menu>     
             <Dropdown.Item onClick={() => setFeeFilter('all')}>
             All
             </Dropdown.Item>
           <Dropdown.Item onClick={() => setFeeFilter('low')}>
             ≤ 200
             </Dropdown.Item>
             <Dropdown.Item onClick={() => setFeeFilter('high')}>
            {'>'} 200
           </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>

      <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ቁጥር</th>
            <th>ፎቶ</th>
            <th>ዓመተ ምህረት</th>
            <th>ምድብ</th>
            <th>የተማሪ ስም</th>
            <th>የአባት ስም</th>
            <th>የአያት ስም</th>
            <th>ክርስትና ስም</th>
            <th>ጾታ</th>
              <th>እድሜ</th>
              <th>የት/ት ደረጃ</th>
              <th>ወረዳ</th>
              <th>የቤት ቁጥር</th>
              <th>የወላጅ ስም</th>
              <th>የወላጅ ስልክ 1</th>
              <th>የወላጅ ስልክ 2</th>
              <th>ክፍያ</th>
            <th>Actions</th>
          </tr>
        </thead>
        {selectedImage && (
         <div className="image-modal" onClick={() => setSelectedImage(null)}>
       <div className="image-content">
       <img src={`http://localhost:4000${selectedImage}`} alt="student" />
      </div>
      </div>
      )} 


        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>
                  {user.photo && (
             <FaImage 
               style={{ cursor: "pointer", color: "blue" }}
                 onClick={() => handleShowImage(`/uploads/${user.photo}`)}
                />
                )}
              </td>

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
              )}
              </td>

              <td>{editId === user._id ? (
                  <select
                    value={editData.mdb}
                    onChange={(e) => setEditData({...editData, mdb: e.target.value})}
                  >
                    <option value="ቂርቆስ">ቂርቆስ 0</option>
                    <option value="ማቴዎስ">ማቴዎስ 1</option>
                    <option value="ማርቆስ">ማርቆስ 2</option>
                    <option value="ሉቃስ">ሉቃስ 3</option>
                    <option value="ዮሐንስ">ዮሐንስ 4</option>
                    <option value="ዳንኤል">ዳንኤል 5</option>
                    <option value="ሕዝቅኤል">ሕዝቅኤል 6</option>
                    <option value="ኤርምያስ">ኤርምያስ 7</option>
                    <option value="ኢሳይያስ">ኢሳይያስ 8</option>
                    <option value="ጴጥሮስ">ጴጥሮስ 9</option>
                    <option value="ጳውሎስ">ጳውሎስ 10</option>
                  </select>
                ) : (
              user.mdb)}</td>
              <td>
                {editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.firstName}
                    onChange={(e) => setEditData({...editData, firstName: e.target.value})}
                  />
                ) : (         
                  user.firstName
                )}</td>
              <td>
                 {editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.fatherName}
                    onChange={(e) => setEditData({...editData, fatherName: e.target.value})}
                  />
                ) : (  
              user.fatherName
                )}</td>
              <td>{editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.grandFatherName}
                    onChange={(e) => setEditData({...editData, grandFatherName: e.target.value})}
                  />
                ) : (
              user.grandFatherName)}</td>
              <td>{editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.christianName}
                    onChange={(e) => setEditData({...editData, christianName: e.target.value})}
                  />
                ) : (
              user.christianName)}</td>
              <td>{editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.gender}
                    onChange={(e) => setEditData({...editData, gender: e.target.value})}
                  />
                ) : (
              user.gender)}</td>
              <td>{editId === user._id ? (  
                  <input 
                    type="number"
                    value={editData.age}    
                    onChange={(e) => setEditData({...editData, age: e.target.value})}
                  />
                ) : (
              user.age)}</td>
              <td>{editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.grade}
                    onChange={(e) => setEditData({...editData, grade: e.target.value})}
                  />
                ) : (
              user.grade)}</td>
              <td>{editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.district}
                    onChange={(e) => setEditData({...editData, district: e.target.value})}
                  />
                ) : (
              user.district)}</td>
              <td>{editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.houseNumber}
                    onChange={(e) => setEditData({...editData, houseNumber: e.target.value})}
                  />
                ) : (
              user.houseNumber)}</td>
              <td>{editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.parentName}
                    onChange={(e) => setEditData({...editData, parentName: e.target.value})}
                  />
                ) : (
              user.parentName)}</td>
              <td>{editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.parentPhone1}
                    onChange={(e) => setEditData({...editData, parentPhone1: e.target.value})}
                  />
                ) : (
              user.parentPhone1)}</td>
              <td>{editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.parentPhone2}
                    onChange={(e) => setEditData({...editData, parentPhone2: e.target.value})}
                  />
                ) : (
              user.parentPhone2)}</td>
               <td>{editId === user._id ? (
                  <input 
                    type="text"
                    value={editData.fee}
                    onChange={(e) => setEditData({...editData, fee: e.target.value})}
                  />
                ) : (
              user.fee)}</td>
             
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
              <td colSpan="18" className="text-center">
                No Students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default StudentDetails
