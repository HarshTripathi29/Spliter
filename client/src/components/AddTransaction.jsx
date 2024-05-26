import React, { useState } from 'react';

const AddTransaction = ({ members, addTransaction }) => {
  const [title, setTitle] = useState('');
  const [contributions, setContributions] = useState({});

  const handleContributionChange = (memberId, amount) => {
    setContributions({ ...contributions, [memberId]: amount });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(title, contributions);
    setTitle('');
    setContributions({});
  };

  return (
    <form onSubmit={handleSubmit} className="add-transaction-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Transaction title"
      />
      {members.map((member) => (
        <div key={member.id} className="member-contribution">
          <label>{member.name}</label>
          <input
            type="number"
            value={contributions[member.id] || ''}
            onChange={(e) => handleContributionChange(member.id, e.target.value)}
            placeholder="Amount"
          />
        </div>
      ))}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
