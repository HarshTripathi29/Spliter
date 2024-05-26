import React, { useState } from 'react';
import AddMember from './AddMember';
import AddTransaction from './AddTransaction';
import Settlement from './Settlement';

const Group = ({ group, setGroups, groups }) => {
  const addMember = (memberName) => {
    const updatedGroups = groups.map((g) =>
      g.id === group.id ? { ...g, members: [...g.members, { id: Date.now(), name: memberName }] } : g
    );
    setGroups(updatedGroups);
  };

  const addTransaction = (title, contributions) => {
    const updatedGroups = groups.map((g) =>
      g.id === group.id ? { ...g, transactions: [...g.transactions, { id: Date.now(), title, contributions }] } : g
    );
    setGroups(updatedGroups);
  };

  return (
    <div className="group">
      <h2>{group.name}</h2>
      <AddMember addMember={addMember} />
      <AddTransaction members={group.members} addTransaction={addTransaction} />
      <Settlement transactions={group.transactions} members={group.members} />
    </div>
  );
};

export default Group;
