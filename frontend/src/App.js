import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './Components/login';
import Home from './pages/Home'; // Ensure the import path is correct
import Portfolio from './pages/Portfolio'; // Import the new Portfolio component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login-signup" element={<LoginSignup />} />
                <Route path="/portfolio/:studentID" element={<Portfolio />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
