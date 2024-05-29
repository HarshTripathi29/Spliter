import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupList from './components/GroupList';
import AddGroup from './components/AddGroup';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import Logout from './components/Logout';
import './App.css';


function App() {
  const [groups, setGroups] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);


  const addGroup = (name) => {
    setGroups([...groups, { id: Date.now(), name, members: [], transactions: [] }]);
  };

  
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Spliter</h1>
          {user && <Logout />}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard groups={groups} addGroup={addGroup} />} />
            <Route path="/login" element=<Login/> />
            <Route path="/group/:groupId" element={<GroupList groups={groups} setGroups={setGroups} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
