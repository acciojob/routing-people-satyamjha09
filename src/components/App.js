
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} /> {/* Match Cypress expected path */}
      </Routes>
    </Router>
  )
}

export default App
