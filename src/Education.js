import React from 'react'
import { Link } from 'react-router-dom'
import { BsCalendarEventFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { BsBook } from "react-icons/bs";

function Education() {
  return (
    <div>
      <div className='dashboard'>

      <aside className='sidebar'>
         <ul>
          <li><Link to="/teachings"><BsBook /> Teachings</Link></li>
          <li><Link to="/Ethicsevents"><BsCalendarEventFill /> Events</Link></li>
          <li><Link to="/Ethicsnotice"><IoIosNotifications /> Notice</Link></li>
          <li className='logout'><Link to="/"><TbLogout /> Log Out</Link></li>
         </ul>
         </aside>

         <div className='content-area'>
              <h2>Welcome to Education 👋</h2>
         </div>
      </div>
    </div>
  )
}

export default Education
