import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import './App.css'

function App() {
  return (
    <div className='bg-container'>
      <h3>MobileFirst App</h3>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
