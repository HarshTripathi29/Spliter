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

   // State to manage form visibility
   const [isFormVisible, setFormVisible] = useState(false);

   // Event handler to toggle form visibility
   const toggleFormVisibility = () => {
     setFormVisible(!isFormVisible);
   };

  return (
    <div className='addGroup'>
    <button onClick={toggleFormVisibility}>
        {isFormVisible ? 'Hide Form' : 'Create New Group'}
      </button>
      {isFormVisible && (
    <form onSubmit={handleSubmit} className="add-group-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add new group"
      />
      <button type="submit">Add Group</button>
    </form>
      )}
    </div>
  );
};

export default AddGroup;
