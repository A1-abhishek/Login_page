import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';
import Registration from './Registration';
import Google from './google'; // Import the Google component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/google" element={<Google />} /> {/* Add the Google route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
