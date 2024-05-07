import React from 'react';

function NoteList({ notes }) {
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>{note.content}</li>
      ))}
    </ul>
  );
}

export default NoteList;