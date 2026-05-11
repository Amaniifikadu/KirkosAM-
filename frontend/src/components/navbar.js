import { useState } from 'react';
import '../pages/pages.css';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    };

    return (

        <header>
        <div className='container'>
        <nav>
            <div className='logo'>
                 <img src="/kirkos2.png" alt="Kirkos sunday school logo" style={{width: "100px", height: "100px" }}/>
                <span style={{color: "yellow"}}>ውሉደ ብርሃን </span>
            </div>
            <div className='amen'>
                <h1>በስመአብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ አሜን</h1>
                <span>መካነ ሰማዕት ቅዱስ ቂርቆስ ቤተ ክርስቲያን ውሉደ ብርሃን ሰንበት ትምህርት ቤት</span>
            </div>
            <ul className={isOpen ? "nav-link active" : 'nav-link'}>

                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/educations">Educations</Link></li>
                  <li><Link to="/signin">Sign In</Link></li>
            </ul>
            <div className='icon' onClick={toggleMenu}>
                <FaBars />
            </div>
        </nav>
        </div>
        </header>
    );
};


export default Navbar;