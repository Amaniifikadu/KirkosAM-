import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useYear } from "../context/YearContext";

function Ethicsd() {
   const username = localStorage.getItem('username') || 'user';
     const [isOpen, setIsOpen] = useState(false);
     const [students, setStudents] = useState([]);
       const { year, setYear } = useYear();
  
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
      <p>{studentsInMdb.length} ተማሪዎቸ</p>
      <p>{maleCount} ወንድ</p>
      <p>{femaleCount} ሴት</p>
    </div>
  );
})}
          
          
  </div>
             </div>
    </div>
  )
}

export default Ethicsd
