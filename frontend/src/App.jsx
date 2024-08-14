
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import UserLayout from './User/UserLayout';
import Home from './User/pages/Home/Home';
import Login  from './User/pages/Login/Login';
import About from './User/pages/About/About';


const App = () => {
  return (
    <Router>
      
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/about" element={<About />} />
         {/* <Route path="*" element={<Error />} />
         <Route path="/login" element={<Auth />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/feed" element={<Feed/>} />
         <Route path="/chatbox" element={<Chatbox/>} /> */}
        </Routes>
    
    </Router>
  );
};

export default App;