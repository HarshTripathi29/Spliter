// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Your Groups</h2>
      <Link to="/groups">
        <button>View Groups</button>
      </Link>
      <Link to="/groups/new">
        <button>Create New Group</button>
      </Link>
    </div>
  );
}

export default Home;
