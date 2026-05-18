import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TiUserAdd } from "react-icons/ti";
import { TbListDetails } from "react-icons/tb";
import { BsCalendarEventFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { useYear } from "./context/YearContext";
// import { FaBars } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';

function Ethics() {
  const username = localStorage.getItem('username') || 'user';
   const [isOpen, setIsOpen] = useState(false);
   const [students, setStudents] = useState([]);
   const { year, setYear } = useYear();
  // const [selectedYear, setSelectedYear] = useState('2018');
  // const [yearLabel, setYearLabel] = useState('2018');


useEffect(() => {
  const fetchStudents = async () => {
    const res = await fetch('https://kirkosam-backend.onrender.com/api/register/studentregister');
    const data = await res.json();

    if (res.ok) {
      setStudents(data);
    }
  };

  fetchStudents();
}, []);

const mdbs = [
  "ቂርቆስ",
  "ማቴዎስ","ማርቆስ","ሉቃስ","ዮሐንስ","ዳንኤል","ሕዝቅኤል","ኤርምያስ","ኢሳይያስ","ጴጥሮስ","ጳውሎስ"
];

 const filteredStudents = students.filter(
  s => String(s.year) === year
);

const maleCount = filteredStudents.filter(s => s.gender === 'ወ').length;
const femaleCount = filteredStudents.filter(s => s.gender === 'ሴ').length;
 

return (
    <div>
       <div className='dashboard'>
         
     <aside className={`sidebar ${isOpen ? 'show' : 'hide'}`}>
         <div className='sidebar-top'>
         <button className="sideicon" onClick={() => setIsOpen(false)}>
            ☰
          </button>
          </div>

          <div className='logo'>
                 <img src="/kirkos2.png" alt="Kirkos sunday school logo" style={{width: "100px", height: "100px" }}/>
                <span style={{color: "yellow"}}>ውሉደ ብርሃን </span>
            </div>
         <ul>
          <li><Link to="/studentregister"><TiUserAdd /> Add Students</Link></li>
          <li><Link to="/studentdetails"><TbListDetails /> Student Details</Link></li>
          <li><Link to="/Ethicsevents"><BsCalendarEventFill /> Events</Link></li>
          <li><Link to="/Ethicsnotice"><IoIosNotifications /> Notice</Link></li>
          <li className='logout'><Link to="/"><TbLogout /> Log Out</Link></li>
         </ul>
         </aside>
         
          {!isOpen && (
           <button
           className="floating-icon"
            onClick={() => setIsOpen(true)}
            >
              ☰
           </button>
              )}
           {/* <button className="sideicon" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button> */}
        
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
         <h3>Total Students</h3>
        <p>{filteredStudents.length} ተማሪዎቸ</p>
        <p>{maleCount} ወንድ</p>
         <p>{femaleCount} ሴት</p>

  </div>
          {mdbs.map((mdb) => {
  const studentsInMdb = filteredStudents.filter(
    student => student.mdb === mdb);

  const maleCount = studentsInMdb.filter(s => s.gender === 'ወ').length;
  const femaleCount = studentsInMdb.filter(s => s.gender === 'ሴ').length;

  return (
    <div className="card" key={mdb}>
      <h3>MDB {mdb}</h3>
      <p>{studentsInMdb.length} ተማሪዎች</p>
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

export default Ethics
