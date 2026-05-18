import React from 'react'
import { Link } from 'react-router-dom'
import { TiUserAdd } from "react-icons/ti";
import { TbListDetails } from "react-icons/tb";
import { BsCalendarEventFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { TbLogout } from "react-icons/tb";

function Mezmur() {
  return (
    <div>
       <div className='dashboard'>

      <aside className='sidebar'>
         <ul>
          <li><Link to="/mezmurregister"><TiUserAdd /> Add Students</Link></li>
          <li><Link to="/mezmurdetails"><TbListDetails /> Student Details</Link></li>
          <li><Link to="/Ethicsevents"><BsCalendarEventFill /> Events</Link></li>
          <li><Link to="/Ethicsnotice"><IoIosNotifications /> Notice</Link></li>
          <li className='logout'><Link to="/"><TbLogout /> Log Out</Link></li>
         </ul>
         </aside>

         <div className='content-area'>
              <h2>Welcome Mezmur 👋</h2>
         </div>
      </div>
    </div>
  )
}

export default Mezmur
