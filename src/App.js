import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';
import Registration from './Registration';
import Google from './google'; // Import the Google component
import Forget from './forget';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/google" element={<Google />} />
        <Route path="/forget" element={<Forget />} /> {/* Add the Google route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
