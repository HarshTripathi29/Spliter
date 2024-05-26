import React, { useState } from 'react';

const AddGroup = ({ addGroup }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addGroup(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-group-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add new group"
      />
      <button type="submit">Add Group</button>
    </form>
  );
};

export default AddGroup;
