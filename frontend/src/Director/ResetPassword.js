import React, { useState } from 'react';

function ResetPassword() {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/resetpassword', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, newPassword })
    });

    const json = await response.json();

    if (response.ok) {
      setMessage('Password reset successful ✅');
    } else {
      setMessage(json.error);
    }
  };

  return (
    <div className='Container'>
    <form onSubmit={handleReset} className='create'>
     
        <div className='logo'>
                 <img src="/kirkos2.png" alt="Kirkos sunday school logo" style={{width: "100px", height: "100px" }}/>
                <span style={{color: "yellow"}}>ውሉደ ብርሃን </span>
            </div>
  
        <h3 style={{color: '#eeff00',
        fontSize: '24px',}}>Reset Password</h3>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <button type="submit">Reset</button>

      {message && <p>{message}</p>}
    </form>
    </div>
  );
}

export default ResetPassword;