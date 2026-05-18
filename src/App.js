import './App.css';
import './pages/pages.css';

import {BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { YearProvider } from "./context/YearContext";
import Home from './pages/Home';
import Navbar from './components/navbar';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Director from './Director';
import Agelgayadd from './Director/Agelgayadd';
import Agelgaydetails from './Director/Agelgaydetails';
import Event from './Director/event';
import Notice from './Director/notice';
import Ethics from './ethics';
import Art from './Art';
import Mezmur from './Mezmur';
import Educations from './pages/Educations';
import Education from './Education';
import EditAgelgay from './Director/EditAgelgay';
import StudentRegister from './Ethics/studentregister';
import Ethicsevents from './Ethics/Ethicsevents';
import Ethicsnotice from './Ethics/Ethicsnotice';
import StudentDetails from './Ethics/studentdetails';
import MezmurRegister from './Mezmur/Mezmurregister';
import MezmurDetails from './Mezmur/Mezmurdetails';
import Ethicsd from './Director/ethicsd';
import Teaching from './Education/teaching';
import ResetPassword from './Director/ResetPassword';

function AppContent() {
  const loctaion = useLocation();

  const hideNavbarRoutes = ['/signin', '/signup','/education','/ethics','/studentregister',
    '/studentdetails','/Ethicsevents','/Ethicsnotice','/art','/mezmur','/mezmurregister',
    '/mezmurdetails','/edit','/agelgayadd','/agelgaydetails','/event','/notice','/director','/ethicsd', '/ResetPassword'];

    const hideNavbar = hideNavbarRoutes.includes(loctaion.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

    <div className="App">
      <div className='pages'> 
        <Routes>
           <Route 
          path="/"
           element={<Home/>}
            />
           <Route 
            path= "/about"
            element={<About/>}
            />
            <Route
            path="/educations"
            element={<Educations/>}
            />
            <Route
            path="/signin"
            element={<Signin/>}
            />
            <Route
            path='/signup'
            element={<Signup/>}
            />
            <Route
            path='/director'
            element={<Director/>}
            />
            <Route
            path='/agelgayadd'
            element={<Agelgayadd/>}
            />
            <Route
            path='/resetpassword'
            element={<ResetPassword/>}
            />
            <Route
            path='/agelgaydetails'
            element={<Agelgaydetails/>}
            />
            <Route
            path="/event"
            element={<Event/>}
            />
            <Route
            path="/notice"
            element={<Notice/>}
            />
            <Route
            path='/ethicsd'
            element={<Ethicsd/>}
            />
            <Route
            path='/education'
            element={<Education/>}
            />
            <Route
            path='/teachings'
            element={<Teaching/>}
            />
            <Route
            path='/ethics'
            element={<Ethics/>}
            />
            <Route
            path='/studentregister'
            element={<StudentRegister/>}
            />
            <Route
            path='/studentdetails'
            element={<StudentDetails/>}
            />
            <Route
            path='/Ethicsevents'
            element={<Ethicsevents/>}
            />
            <Route
            path='/Ethicsnotice'
            element={<Ethicsnotice/>}
            />
            <Route
            path='/art'
            element={<Art/>}
            />
            <Route
            path='/mezmur'
            element={<Mezmur/>}
            />
            <Route
            path='/mezmurregister'
            element={<MezmurRegister/>}
            />
            <Route
            path='/mezmurdetails'
            element={<MezmurDetails/>}
            />
            <Route
            path='/edit'
            element={<EditAgelgay/>}
            />
        </Routes>
        </div>
    </div>
    </>
  );
}

function App() {
  return (
    <YearProvider>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
    </YearProvider>
  );
}

export default App;