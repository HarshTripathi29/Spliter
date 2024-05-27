import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupList from './components/GroupList';
import AddGroup from './components/AddGroup';
import Dashboard from './components/Dashboard';
import './App.css';


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
        <div>
        <main className="App-main">
        <div className="content">
          <div className="text-section">
            <div className="headline">
              <h2>Split Bills, Not Friendship</h2>
            </div>
            <div className="description">
              <p>We help group of peopple split expenses and bills when theyare sharing costs for a particular event or acticity.</p>
            </div>
            <div className="get-started">
              <button>Get Started</button>
            </div>
          </div>
          <div className="image-section">
            <img 
              src="https://img.freepik.com/premium-vector/happy-people-drinking-friends-party-cocktail-drinks-people-hands-students-friendship-cartoon-persons-clinking-glasses-decent-vector-concept_53562-16798.jpg?w=740" 
              alt="Happy people drinking"
            />
          </div>
        </div>
      </main>
        </div>
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
