// src/App.js
import React from 'react';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>API Call Example: Users</h1>
      <UserList />
    </div>
  );
}

export default App;
