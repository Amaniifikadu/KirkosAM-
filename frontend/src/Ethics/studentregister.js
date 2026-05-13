import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function StudentRegister() {
        const [photo, setPhoto] = useState(null);
        const [year, setYear] = useState('2018')
        const [mdb, setMdb] = useState('ቂርቆስ');
        const [firstName, setFirstName] = useState('');
        const [fatherName, setFatherName] = useState('');
        const [grandFatherName, setGrandFatherName] = useState('');
        const [christianName, setChristianName] = useState('');
        const [gender, setGender] = useState('ሴ');
        const [age, setAge] = useState('14');
        const [grade, setGrade] = useState('7');
        const [district, setDistrict] = useState('10');
        const [houseNumber, setHouseNumber] = useState('');
        const [parentName, setParentName] = useState('');
        const [parentPhone1, setParentPhone1] = useState('');
        const [parentPhone2, setParentPhone2] = useState('');
        const [fee, setFee] = useState('');
        const [error, setError] = useState('');
        const [emptyFields, setEmptyFields] = useState([]);
        const [success, setSuccess] = useState('');


       const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here 
        const formData = new FormData();

      formData.append('photo', photo);
  formData.append('year', year);
  formData.append('mdb', mdb);
  formData.append('firstName', firstName);
  formData.append('fatherName', fatherName);
  formData.append('grandFatherName', grandFatherName);
  formData.append('christianName', christianName);
  formData.append('gender', gender);
  formData.append('age', age);
  formData.append('grade', grade);
  formData.append('district', district);
  formData.append('houseNumber', houseNumber);
  formData.append('parentName', parentName);
  formData.append('parentPhone1', parentPhone1);
  formData.append('parentPhone2', parentPhone2);
  formData.append('fee', fee);

  const response = await fetch('https://kirkosam-backend.onrender.com/api/register/studentregister', {
    method: 'POST',
    body: formData   // ❗ NO JSON
  });

  const json = await response.json();

  if (!response.ok) {
    setError(json.error);
    setEmptyFields(json.emptyFields || []);
  }

  if (response.ok) {
    setError(null);
    setEmptyFields([]);
    setSuccess('Registration successful!');

     setPhoto(null);
  setYear('2018');
  setMdb('ቂርቆስ');
  setFirstName('');
  setFatherName('');
  setGrandFatherName('');
  setChristianName('');
  setGender('ሴ');
  setAge('14');
  setGrade('7');
  setDistrict('10');
  setHouseNumber('');
  setParentName('');
  setParentPhone1('');
  setParentPhone2('');
  setFee('');
  }
            setTimeout(() => {
              setSuccess('');
            }, 3000);
          
      }        
           

  return (
    <div className='register'>
       
       <div>
       <h2>መመዝገቢያ </h2>
       </div>
      <form className="create-student-form" onSubmit={handleSubmit}>
       <div>
         
         <Container>
         <Row>
          <Col>
          <label>ፎቶ</label>
           <input
             type="file"
             accept="image/*"
             capture="environment"   // ✅ opens camera on mobile
             onChange={(e) => setPhoto(e.target.files[0])}
             className={emptyFields?.includes('photo') ? 'err' : ''}
          />
          </Col>

           <Col>
           <label>ዓመተ ምህረት</label>
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
           </Col>
           <Col> <label>ምድብ </label>
        <select
         placeholder='ምድብ'
         value={mdb}
          onChange={(e) => setMdb(e.target.value)}
          className={emptyFields?.includes('mdb') ? 'err' : ''}>
          <option>ቂርቆስ</option>
          <option> ማቴዎስ</option>
          <option> ማርቆስ</option>
          <option> ሉቃስ</option>
          <option> ዮሐንስ</option>
          <option> ዳንኤል</option>
          <option> ሕዝቅኤል</option>
          <option> ኤርምያስ</option>
          <option> ኢሳይያስ</option>
          <option> ጴጥሮስ</option>
          <option> ጳውሎስ</option>
        </select></Col>
 
        <Col><label> የተማሪ ክፍያ </label>
        <input type="text" 
        placeholder='ክፍያ'
        value={fee}
        onChange={(e) => setFee(e.target.value)}
        className={emptyFields?.includes('fee') ? 'err' : ''}
        /></Col>
        
         </Row>

            <Row>
               <Col md={3} xs={6}> 
               <label>የተማሪ ስም </label>
        <input type="text" 
        placeholder='የተማሪ ስም'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className={emptyFields?.includes('firstName') ? 'err' : ''}
        /></Col>
               <Col md={3} xs={6}>
               <label>የአባት ስም </label>
        <input type="text" 
        placeholder='የአባት ስም'
        value={fatherName}
        onChange={(e) => setFatherName(e.target.value)}
        className={emptyFields?.includes('fatherName') ? 'err' : ''}
        /></Col>
               <Col md={3} xs={6}> 
               <label>የአያት ስም </label>
        <input type="text" 
        placeholder='የአያት ስም'
        value={grandFatherName}
        onChange={(e) => setGrandFatherName(e.target.value)}
        className={emptyFields?.includes('grandFatherName') ? 'err' : ''}
        /></Col>
               <Col md={3} xs={6}>
               <label>የተማሪ የክርስትና ስም </label>
        <input type="text" 
        placeholder='የተማሪ የክርስትና ስም'
        value={christianName}
        onChange={(e) => setChristianName(e.target.value)}
        className={emptyFields?.includes('christianName') ? 'err' : ''}
        /></Col>
          </Row>
      <Row>
        <Col> <label>የተማሪ ጾታ </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}
          className={emptyFields?.includes('gender') ? 'err' : ''}>
          <option>ወ</option>
          <option>ሴ</option>
        </select></Col>
        <Col><label>የተማሪ ዕድሜ </label>
       <select value={age} onChange={(e) => setAge(e.target.value)}
          className={emptyFields?.includes('age') ? 'err' : ''}>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
       </select></Col>
        <Col> <label>የተማሪ ክፍል </label>
        <select value={grade} onChange={(e) => setGrade(e.target.value)}
          className={emptyFields?.includes('grade') ? 'err' : ''}>
          <option>LKG</option>
          <option>UKG</option>
          <option> 1</option>
          <option> 2</option>
          <option> 3</option>
          <option> 4</option>
          <option> 5</option>
          <option> 6</option>
          <option> 7</option>
          <option> 8</option>
          <option> 9</option>
          <option> 10</option>
          <option> 11</option>
          <option> 12</option>
        </select></Col>
        <Col> <label>ወረዳ </label>
        <select value={district} onChange={(e) => setDistrict(e.target.value)}
          className={emptyFields?.includes('district') ? 'err' : ''}>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
        </select></Col>
      </Row>
      <Row>
        <Col md={3} xs={6}>
        <label>የተማሪ የቤት ቁጥር </label>
        <input type="text"
          placeholder='የተማሪ የቤት ቁጥር'
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
          className={emptyFields?.includes('houseNumber') ? 'err' : ''}
        /></Col>

        <Col md={3} xs={6}>
        <label>የተማሪ ወላጅ ስም </label>
        <input type="text" 
        placeholder='የተማሪ ወላጅ ስም'
        value={parentName}
        onChange={(e) => setParentName(e.target.value)}
        className={emptyFields?.includes('parentName') ? 'err' : ''}
        /></Col>
        <Col md={3} xs={6}> 
        <label>የተማሪ ወላጅ ስልክ 1 </label>
        <input type="text" 
        placeholder='የተማሪ ወላጅ ስልክ 1'
        value={parentPhone1}
        onChange={(e) => setParentPhone1(e.target.value)}
        className={emptyFields?.includes('parentPhone1') ? 'err' : ''}
        /></Col>
        <Col md={3} xs={6}>
        <label>የተማሪ ወላጅ ስልክ 2 </label>
        <input type="text" 
        placeholder='የተማሪ ወላጅ ስልክ 2'
        value={parentPhone2}
        onChange={(e) => setParentPhone2(e.target.value)}
        className={emptyFields?.includes('parentPhone2') ? 'err' : ''}
        /></Col>
      </Row>
    </Container>
     
        <button type='submit'>መዝግብ</button>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        
      </div>
      </form>
        
        
       <div>
        
    </div>
    </div>
  )
}
export default StudentRegister
