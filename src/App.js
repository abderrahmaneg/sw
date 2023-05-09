import React from 'react';
import Login from './components/Login';
import Forgotpassword from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import LastPage from './components/LastPage';

import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='container' >
      <BrowserRouter>

        <Routes>
          <Route path='/' exact element={<Login />}></Route>
          <Route path='/forgotpassword' exact element={<Forgotpassword />} ></Route>
          <Route path="/send-link"  exact element={<SecondPage />} ></Route>
          <Route path="/reset-password"  exact element={<ThirdPage />} ></Route>
          <Route path="/success"  exact element={<LastPage />} ></Route>
        </Routes>


      </BrowserRouter>
    </div>




  );
}

export default App;
