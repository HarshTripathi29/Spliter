import React from 'react';
import { Link } from 'react-router-dom';
import GroupCard from './GroupCard';

const Dashboard = ({ groups }) => {
  return (
    <div className="dashboard">
      <h2>Your Groups</h2>
      <div className="group-cards">
        {groups.map((group) => (
          <Link key={group.id} to={`/group/${group.id}`} style={{ textDecoration: 'none' }}>
            <GroupCard group={group} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
