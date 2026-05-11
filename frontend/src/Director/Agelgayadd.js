import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Agelgayadd() {

   const navigate = useNavigate();
 
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('ሴ');
  const [role, setRole] = useState('director');
  const [year, setYear] = useState('2018')
   const [emptyFields, setEmptyFields] = useState([]);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      firstname: fname,
      lastname: lname,
      username: uname,
      gender,
      password,
      role,
      year
    };

    const response = await fetch('https://kirkosam-backend.onrender.com/api/agelgayadd', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setSuccess(null);
      setEmptyFields(json.emptyFields || []);
    } else {
      setSuccess('User created successfully ✅');
      setError(null);

      // clear form
      setFname('');
      setLname('');
      setUname('');
      setPassword('');
      setRole('director');
      setYear('2018')
      setSuccess('Agelgay Created')

      // optional redirect
      setTimeout(() => {
        navigate('/agelgaydetails');
      }, 1500);
    }
  };

  return (
    <div className="Container">
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add Agelgay</h3>

        <label>Year</label>
                 <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className={emptyFields?.includes('year') ? 'err' : ''}
                >
               <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
          </select> 

        <label>First Name</label>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />

        <label>Last Name</label>
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />

        <label> Gender </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}
          className={emptyFields?.includes('gender') ? 'err' : ''}>
          <option>ወ</option>
          <option>ሴ</option>
        </select>

        <label>Username</label>
        <input
          type="text"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Role</label>
        <select value={role}  onChange={(e) => setRole(e.target.value)}>
          {/* <option value="student">Student</option> */}
          <option value="director">Director</option>
          <option value="ethics">Ethics</option>
          <option value="education">Education</option>
          <option value="mezmur">Mezmur</option>
          <option value="art">Art</option>
        </select>

        <button type="submit">Create User</button>
        {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      </form>

      
    </div>
  )
}

export default Agelgayadd
