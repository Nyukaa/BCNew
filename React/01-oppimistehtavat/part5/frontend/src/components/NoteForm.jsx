import React from "react";

const NoteForm = ({ onSubmit, newNote, handleNoteChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        value={newNote}
        onChange={handleNoteChange}
        placeholder="Write a new note..."
      />
      <button type="submit">save</button>
    </form>
  );
};

export default NoteForm;
