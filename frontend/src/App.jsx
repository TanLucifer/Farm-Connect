
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import UserLayout from './User/UserLayout';
import Home from './User/pages/Home/Home';


const App = () => {
  return (
    <Router>
      
        <Routes>
         <Route path="/" element={<Home />} />
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