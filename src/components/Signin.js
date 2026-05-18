import React from 'react'
import { useState } from 'react';
import './All.css';
import { useSigninContext } from '../hooks/useSigninContext';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const { dispatch } =  useSigninContext();
  const navigate = useNavigate();

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState(null);
   const [emptyFields, setEmptyFields] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    
     if (!username || !password) {
    setError("Please fill in all fields");
    return;
  }

    const signin = { username, password };

    const response = await fetch('https://kirkosam-backend.onrender.com/api/signin',{
      method: 'POST',
      body: JSON.stringify(signin),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json(); 
    if (!response.ok) {
      setError(json.error);
    }else {
      setError(null);
      setEmptyFields([]);
      setUsername('');
      setPassword('');
      dispatch({ type: 'LOGIN_USER', payload: json.user });

      localStorage.setItem('username', json.user.username);
      localStorage.setItem('role', json.user.role);

      const role = json.user.role;

    // ✅ Navigate based on role
    if (role === "director") {
      navigate('/director');
    } else if (role === "ethics") {
      navigate('/ethics');
    } else if (role === "education") {
      navigate('/education');
    } else if (role === "mezmur") {
      navigate('/mezmur');
    } else if (role === "art") {
      navigate('/art');
    } else {
      navigate('/home');
    }

    setUsername('');
    setPassword('');
    }
  }

  return (
    <div className='Container'>
      <form className="create" onSubmit={handleSubmit}>
       <div className='logo'>
                 <img src="/kirkos2.png" alt="Kirkos sunday school logo" style={{width: "100px", height: "100px" }}/>
                <span style={{color: "yellow"}}>ውሉደ ብርሃን </span>
            </div>
      <h3 style={{
        color: '#eeff00',
        fontSize: '24px', 
      }}>Sign In</h3>

        <label>User name</label>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={emptyFields?.includes('username') ? 'error' : ''}
        />

        <label>Password</label>
        <input type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={emptyFields?.includes('password') ? 'error' : ''}
        />

        <button type="submit">Log In</button>
        <p onClick={() => navigate('/ResetPassword')} style={{cursor: "pointer", color: "#eeff00"}}>
         Forgot Password?
        </p>
        {/* <button type="button" onClick={() => navigate('/signup')}> Sign Up</button> */}
          {error && <div className="error">{error}</div>} 
      {/* {success && <div className="success">{success}</div>} */}
       </form>
      
    </div>
  )
}
export default Signin
