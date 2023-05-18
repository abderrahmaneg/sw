import React, { useState } from 'react';
import Login from './components/Login';
import Forgotpassword from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import LastPage from './components/LastPage';
import Dashboard from './components/Dashboard';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  
  const [loggedIn,setLoggedIn]=useState(false);
  const [role,setRole]=useState('');
  return (
    <div className='container' >
      <BrowserRouter>

        <Routes>
          <Route path='/login' exact element={<Login setLoggedIn={setLoggedIn} setRole={setRole} />}></Route>
          <Route path='/forgotpassword' exact element={<Forgotpassword />} ></Route>
          <Route path="/send-link"  exact element={<SecondPage />} ></Route>
          <Route path="/reset-password"  exact element={<ThirdPage />} ></Route>
          <Route path="/success"  exact element={<LastPage />} ></Route>
          <Route path="/Dashboard"  exact element={<Dashboard loggedIn={loggedIn} role={role} />} ></Route>

        </Routes>


      </BrowserRouter>
    </div>




  );
}

export default App;
