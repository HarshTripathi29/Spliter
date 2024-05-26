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
    <div className='addMember'>
    <form onSubmit={handleSubmit} className="add-member-form">
      <input
        type="text"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
        placeholder="Add new member"
      />
      <button type="submit">Add Member</button>
    </form>
    </div>
  );
};

export default AddMember;
