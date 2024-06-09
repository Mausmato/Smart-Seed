import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dash from "./pages/dashboard";
import Pap from "./pages/pap";

import "./index.css"; // Import the CSS file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/analyze" element={<Pap />} />
      </Routes>
    </Router>
  );
}

export default App;