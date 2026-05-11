import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TiUserAdd } from "react-icons/ti";
import { TbListDetails } from "react-icons/tb";
import { BsCalendarEventFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import Dropdown from 'react-bootstrap/Dropdown';
import { useYear } from "./context/YearContext";

function Director() {
  const username = localStorage.getItem('username') || 'user';
  const [isOpen, setIsOpen] = useState(false);
  const [agelgays, setAgelgays] = useState([]);
   const { year, setYear } = useYear();
   
   useEffect(() => {
     const fetchAgelgays = async () => {
       const res = await fetch('https://kirkosam-backend.onrender.com/api/agelgayadd');
       const data = await res.json();
   
       if (res.ok) {
         setAgelgays(data);
       }
     };
   
     fetchAgelgays();
   }, []);
   
   const roles = [
     "dirctor", "ethics", "education", "mezmur", "art"
   ];
   
    const filteredAgelgays = agelgays.filter(
     s => String(s.year) === year
   );
   
   const maleCount = filteredAgelgays.filter(s => s.gender === 'ወ').length;
   const femaleCount = filteredAgelgays.filter(s => s.gender === 'ሴ').length;

  return (
   <div>
    <div className='dashboard'>

      <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
          <div className='logo'>
                 <img src="/kirkos2.png" alt="Kirkos sunday school logo" style={{width: "100px", height: "100px" }}/>
                <span style={{color: "yellow"}}>ውሉደ ብርሃን </span>
            </div>
         <ul>
         <li><Link to="/agelgayadd"><TiUserAdd /> Add Agelgay</Link></li>
          <li><Link to="/agelgaydetails"><TbListDetails /> Agelgay Details</Link></li>
          <li><Link to="/event"><BsCalendarEventFill /> Events</Link></li>
          <li><Link to="/notice"><IoIosNotifications /> Notice</Link></li>
          <li><Link to="/ethicsd"><TbListDetails /> Ethics</Link></li>
          <li className='logout'><Link to="/"><TbLogout /> Log Out</Link></li>
         </ul>
         </aside>

         <button className="sideicon" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        
         <div className='content-area'>
              <h2>Welcome {username} 👋</h2>
              <Dropdown className='dropdown'>
             <Dropdown.Toggle>
              {year}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                   <Dropdown.Item onClick={() => setYear("2018")}>2018</Dropdown.Item>
                   <Dropdown.Item onClick={() => setYear("2019")}>2019</Dropdown.Item>
                   <Dropdown.Item onClick={() => setYear("2020")}>2020</Dropdown.Item>
                   <Dropdown.Item onClick={() => setYear("2021")}>2021</Dropdown.Item>
                   <Dropdown.Item onClick={() => setYear("2022")}>2022</Dropdown.Item>
              </Dropdown.Menu>
           </Dropdown>
         
          <div className='stats'>
          <div className="card total">
         <h3>Total Agelgays</h3>
        <p>{filteredAgelgays.length} Agelgays</p>
        <p>{maleCount} ወንድ</p>
         <p>{femaleCount} ሴት</p>

  </div>
          {roles.map((role) => {
  const AgelgaysInRole = filteredAgelgays.filter(
    agelgay => agelgay.role === role);

  const maleCount = AgelgaysInRole.filter(s => s.gender === 'ወ').length;
  const femaleCount = AgelgaysInRole.filter(s => s.gender === 'ሴ').length;

  return (
    <div className="card" key={role}>
      <h3>Role {role}</h3>
      <p>{AgelgaysInRole.length} Agelgays</p>
      <p>{maleCount} ወንድ</p>
      <p>{femaleCount} ሴት</p>
    </div>
  );
})}
          
          
  </div>
             </div>
      </div>
   </div>
  )
}

export default Director
