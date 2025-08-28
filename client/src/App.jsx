import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./CommonCompo/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        {/* Add padding top to prevent navbar overlay */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;