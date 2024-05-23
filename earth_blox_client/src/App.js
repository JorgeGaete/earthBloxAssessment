import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Welcome from './Welcome';
import Header from './Header';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )

};

export default App;