import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [note, setRating] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    onFilter({ title: event.target.value, note});
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
    onFilter({ title, note: event.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={note}
        onChange={handleRatingChange}
      />
    </div>
  );
}

export default Filter;