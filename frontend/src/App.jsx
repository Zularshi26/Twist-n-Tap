import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct imports
import React from 'react';
import Home from './home/Home';
import AuthForm from './login-register/AuthForm';
import HipHop from './categories/Pages/HipHop'; // Importing category pages

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-register" element={<AuthForm />} />
        <Route path="/hiphop" element={<HipHop />} />


      </Routes>
    </Router>
  );
}

export default App;
