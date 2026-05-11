//store and update data
import React, { useState } from 'react'
import './All.css';
// import { useSignupContext } from '../hooks/useSignupContext';
import { useNavigate } from 'react-router-dom';

function Signup() {
  //dispatch is used to send actions to update global state.
    // const { dispatch } = useSignupContext();
    const navigate = useNavigate();

  //firstname-stores the input value.
  //setFirstname-updates the value of firstname. 
  //useState('')-initializes the state of firstname to an empty string.
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Stores server error messages.
    const [error, setError] = useState(null);
    //Stores fields that are empty or invalid when the form is submitted.
    const [emptyFields, setEmptyFields] = useState([]);
    const [success, setSuccess] = useState(null);
    const [settimeout] = useState(null);
    
    //Function executed when form is submitted.
    //async because it sends request to server.
    const handleSubmit = async (e) => {
    //Prevents default form submission behavior (page refresh).
      e.preventDefault();

    //Creates an object with the form data.
    const signup = { firstname, lastname, username, password };

    //Sends a POST request to the server with the form data.
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify(signup),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      //Parses the JSON response from the server.
      const json = await response.json();

      //If the response is not ok, it means there was an error.
      if (!response.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }
      //If the response is ok, it means the signup was successful.
      if (response.ok) {
        setError(null);
        setEmptyFields([]);
        setFirstname('');
        setLastname('');
        setUsername('');
        setPassword('');
        // dispatch({ type: 'CREATE_SIGNUP', payload: json });
        setSuccess('Signup successful! You can now sign in.');
      }
    }

    return (
    <div className='Container'>
       <form className="create" onSubmit={handleSubmit}> 
      <h3 style={{
        color: '#eeff00',
        fontSize: '24px',
        textAlign: 'center'
      }}>Wulude Birhan Sunday School</h3>
      
        <label>First Name</label>
      <input 
        type="text"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        className={emptyFields.includes('firstname') ? 'error' : ''}
      />
      
      <label>Last Name</label>
      <input 
        type="text"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        className={emptyFields.includes('lastname') ? 'error' : ''}
      />
      
      <label>User name</label>
      <input 
        type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={emptyFields.includes('username') ? 'error' : ''}
      />
      <label>Password</label>
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={emptyFields.includes('password') ? 'error' : ''}
      />

      <button type="submit">Sign Up</button>
      <button type="buttom" onClick={() => navigate('/signin')}> Sign In</button>
      </form>
      
       {error && <div className="error">{error}</div>}
       {success && <div className="success">{success}</div>}
       {settimeout}
    </div>
  )
}

export default Signup
