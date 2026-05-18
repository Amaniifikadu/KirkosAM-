import React from 'react'
import './pages.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';
// import Card from 'react-bootstrap/Card';

import { FaBookOpen, FaPaintBrush, FaMusic, FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";


function Home() {
  return (
    <div>
      <div className='home'>
           <div className='amen'>
                <h1>በስመአብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ አሜን</h1>
                <span>መካነ ሰማዕት ቅዱስ ቂርቆስ ቤተ ክርስቲያን ውሉደ ብርሃን ሰንበት ትምህርት ቤት ቅዱስ ቂርቆስ አዳጊዎች ማዕከል</span>
            </div>
        <div className='home1'>
          <div className='home-text'>
        <h1>Welcome to Sunday School</h1>
        <p>Learn, Grow, and Have with Bible Stories, Songs, and Friends!</p>
        <button>Join Us Today</button>
        <button>Explore Lessons</button>
        </div>
        <div>
        <img src='Qurban2.jpg' alt='Kurban'/>
        </div>
      </div>
      </div>

       <section className="offer-section">
      <h1>What We Offer</h1>
      <p className="subtitle">
        Explore our exciting programs designed for children of all ages
      </p>

      <div className="cards-container">
        
        <div className="card">
          <div className="icon blue">
            <FaBookOpen />
          </div>
          <h3>Bible Lessons</h3>
          <p>Discover amazing Bible stories in fun and engaging ways</p>
          <button>Read More</button>
        </div>

        <div className="card">
          <div className="icon orange">
            <FaPaintBrush />
          </div>
          <h3>Fun Activities</h3>
          <p>Crafts, games, and activities that bring lessons to life</p>
          <button>Read More</button>
        </div>

        <div className="card">
          <div className="icon green">
            <FaMusic />
          </div>
          <h3>Songs & Stories</h3>
          <p>Sing joyful songs and hear inspiring stories together</p>
          <button>Read More</button>
        </div>

        <div className="card">
          <div className="icon pink">
            <FaCalendarAlt />
          </div>
          <h3>Events</h3>
          <p>Special celebrations and community gatherings</p>
          <button>Read More</button>
        </div>

      </div>
    </section>

     <div className="featured-container">
      <div className="featured-card">

        {/* LEFT IMAGE */}
        <div className="image-section">
          <img src="Tmhrt.jpg" alt="Lesson" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="content-section">
          <span className="badge">New This Week</span>

          <h1>The Good Samaritan</h1>

          <p>
            Learn about kindness, compassion, and helping others through the
            beautiful story of the Good Samaritan. We'll explore how we can be
            good neighbors in our daily lives!
          </p>

          <div className="info">
            <p><FaCalendarAlt /> Sunday, April 27, 2026</p>
            <p><FaClock /> 10:00 AM - 11:30 AM</p>
            <p><FaUsers /> Ages 4–12</p>
          </div>

          <button className="btn">Read More</button>
        </div>

      </div>
    </div>

      <section className="verse-section">

      {/* TOP BADGE */}
      <div className="verse-badge">
        ✨ Memory Verse of the Week ✨
      </div>

      {/* MAIN CARD */}
      <div className="verse-card">

        <div className="icon">
          <FaBookOpen />
        </div>

        <h2>
          "Let us love one another, for love comes from God."
        </h2>

        <p className="verse-ref">— 1 John 4:7</p>

      </div>

      {/* FOOTER TEXT */}
      <p className="footer-text">
        Practice this verse with your family this week!
      </p>

    </section>


     <div>
      <h1 style={{textAlign: "center"}}>አጋር</h1>
      <img style={{width: "300px", hight: "200px", display: "block", margin: "0 auto"} } className='partner' src='janderebawL.png' alt="jan logo"/>
      <p style={{fontSize: "20px", textAlign: "center"}}>የኢትዮጵያ ጃንደረባው ትውልድ </p>
      </div> 

        <div className='foot'>
          <div className='con'>
         <Container> 
      <Row>
        <Col>
        <label>First Name </label>
        <input type="text"/> <br/>
         <label>Last Name </label>
        <input type="text"/> <br/>
        <lable>Comment </lable>
        <textarea type="text"/> <br/>
         <Button variant="success">SUbmit</Button>
        </Col>
         <Col>
         <h2>Location</h2>
         <ul>
          <li>Kirkos around Leghar</li>
         </ul>
          </Col>

         <Col>
           <img src="kirkos2.png" alt="logo" className="logo2" />
        <p>Wulude birhan senbet tmhrt bet</p>
         <h2>Contact </h2>
         <ul>
          <li>wludebirhan15@gmail.com</li>
          <li>+251 901010101</li>
         </ul>
        </Col>

      </Row>

    </Container>
     <hr/> 
      </div>
      <footer style={{textAlign: "center"}}>
        Copyright @2026
      </footer>
      </div>
      
   </div>
  )
}
export default Home
