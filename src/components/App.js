import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails';
import React from "react"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;