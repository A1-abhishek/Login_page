import React from 'react';
import Login from './login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Registration';
// import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
