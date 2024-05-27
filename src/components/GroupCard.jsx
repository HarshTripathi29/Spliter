import React from 'react';

const GroupCard = ({ group }) => {
  return (
    <div className="group-card">
      <h3>{group.name}</h3>
      <p>Members: {group.members.length}</p>
      <p>Transactions: {group.transactions.length}</p>
    </div>
  );
};

export default GroupCard;
