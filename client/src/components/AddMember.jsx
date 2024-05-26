import React, { useState } from 'react';

const AddMember = ({ addMember }) => {
  const [memberName, setMemberName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (memberName.trim()) {
      addMember(memberName);
      setMemberName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-member-form">
      <input
        type="text"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
        placeholder="Add new member"
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default AddMember;
