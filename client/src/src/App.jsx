import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupList from './components/GroupList';
import AddGroup from './components/AddGroup';
import Dashboard from './components/Dashboard';
import './App.css';
import Home from './components/Home';

function App() {
  const [groups, setGroups] = useState([]);

  const addGroup = (name) => {
    setGroups([...groups, { id: Date.now(), name, members: [], transactions: [] }]);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Spliter</h1>
        </header>
        <main>
        <AddGroup addGroup={addGroup} />
          <Routes>
            <Route path="/" element={<Dashboard groups={groups} />} />
            <Route path="/group/:groupId" element={<GroupList groups={groups} setGroups={setGroups} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
