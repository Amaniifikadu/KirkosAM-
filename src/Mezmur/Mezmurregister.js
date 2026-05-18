import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MezmurRegister() {
          const [firstName, setFirstName] = useState('');
          const [fatherName, setFatherName] = useState('');
          const [grandFatherName, setGrandFatherName] = useState('');
          const [christianName, setChristianName] = useState('');
          const [identifier, setIdentifier] = useState('መዘምራን');
          const [gender, setGender] = useState('ሴ');
          const [age, setAge] = useState('14');
          const [grade, setGrade] = useState('7');
          const [district, setDistrict] = useState('10');
          const [houseNumber, setHouseNumber] = useState('');
          const [parentName, setParentName] = useState('');
          const [parentPhone1, setParentPhone1] = useState('');
          const [parentPhone2, setParentPhone2] = useState('');
          const [error, setError] = useState('');
          const [emptyFields, setEmptyFields] = useState([]);
          const [success, setSuccess] = useState('');
          const [settimeout] = useState(null);
  
         const handleSubmit = async (e) => {
          e.preventDefault();
          // Handle form submission logic here 
  
        const mezmurregister = {firstName, fatherName, grandFatherName, christianName, identifier,
           gender,age, grade, district, houseNumber, 
          parentName, parentPhone1, parentPhone2};
       
  
         const response = await fetch('/api/mezmurregister', {
          method: 'POST',
          body: JSON.stringify(mezmurregister),
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        const json = await response.json(); 
        
          if (!response.ok) {
              setError(json.error);
          }
          if (response.ok) {
              setError(null);
              setEmptyFields([]);
              setFirstName('');
              setFatherName('');
              setGrandFatherName('');
              setChristianName('');
              setIdentifier('መዘምራን');
              setGender('ሴ');
              setAge('14');
              setGrade('7');
              setDistrict('10');
              setHouseNumber('');
              setParentName('');
              setParentPhone1('');
              setParentPhone2('');
              setSuccess('Registration successful!');
        }
      };  
  return (
    <div className='register'>
        <h2>መመዝገቢያ </h2>
      <form className="create-student-form" onSubmit={handleSubmit}>
       <div>
         <Container>
            <Row>
               <Col> <lable>የተማሪ ስም </lable>
        <input type="text" 
        placeholder='የተማሪ ስም'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className={emptyFields.includes('firstName') ? 'error' : ''}
        /></Col>
               <Col><lable>የአባት ስም </lable>
        <input type="text" 
        placeholder='የአባት ስም'
        value={fatherName}
        onChange={(e) => setFatherName(e.target.value)}
        className={emptyFields.includes('fatherName') ? 'error' : ''}
        /></Col>
               <Col> <lable>የአያት ስም </lable>
        <input type="text" 
        placeholder='የአያት ስም'
        value={grandFatherName}
        onChange={(e) => setGrandFatherName(e.target.value)}
        className={emptyFields.includes('grandFatherName') ? 'error' : ''}
        /></Col>
               <Col><lable>የተማሪ የክርስትና ስም </lable>
        <input type="text" 
        placeholder='የተማሪ የክርስትና ስም'
        value={christianName}
        onChange={(e) => setChristianName(e.target.value)}
        className={emptyFields.includes('christianName') ? 'error' : ''}
        /></Col>
          </Row>
      <Row>
        <Col><label>መለያ</label>
        <select value={identifier} onChange={(e) => setIdentifier(e.target.value)}>
          <option>መዘምራን</option>
          <option>የል/ክ/ጊዜ</option>
          </select></Col>
        <Col> <lable>የተማሪ ጶታ </lable>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option>ወ</option>
          <option>ሴ</option>
        </select></Col>
        <Col><lable>የተማሪ ዕድሜ </lable>
       <select value={age} onChange={(e) => setAge(e.target.value)}>
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
        <Col> <lable>የተማሪ ክፍል </lable>
        <select value={grade} onChange={(e) => setGrade(e.target.value)}>
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
        <Col> <lable>ወረዳ </lable>
        <select value={district} onChange={(e) => setDistrict(e.target.value)}>
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
        <Col><lable>የተማሪ የቤት ቁጥር </lable>
        <input type="text"
          placeholder='የተማሪ የቤት ቁጥር'
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
          className={emptyFields.includes('houseNumber') ? 'error' : ''}
        /></Col>

        <Col><lable>የተማሪ ወላጅ ስም </lable>
        <input type="text" 
        placeholder='የተማሪ ወላጅ ስም'
        value={parentName}
        onChange={(e) => setParentName(e.target.value)}
        className={emptyFields.includes('parentName') ? 'error' : ''}
        /></Col>
        <Col> <lable>የተማሪ ወላጅ ስልክ 1 </lable>
        <input type="text" 
        placeholder='የተማሪ ወላጅ ስልክ 1'
        value={parentPhone1}
        onChange={(e) => setParentPhone1(e.target.value)}
        className={emptyFields.includes('parentPhone1') ? 'error' : ''}
        /></Col>
        <Col><lable>የተማሪ ወላጅ ስልክ 2 </lable>
        <input type="text" 
        placeholder='የተማሪ ወላጅ ስልክ 2'
        value={parentPhone2}
        onChange={(e) => setParentPhone2(e.target.value)}
        className={emptyFields.includes('parentPhone2') ? 'error' : ''}
        /></Col>
      </Row>
    </Container>
     
        <button type='submit'>መዝግብ</button>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        {settimeout}
      </div>
      </form>
        
        
       <div>
        
    </div>
    </div>
  )
}

export default MezmurRegister
