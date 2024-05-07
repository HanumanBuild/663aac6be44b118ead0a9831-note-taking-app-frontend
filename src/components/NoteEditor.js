import React, { useState } from 'react';

function NoteEditor({ onSave }) {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <button type="submit">Save Note</button>
    </form>
  );
}

export default NoteEditor;