import React, { createContext, useContext, useState } from 'react';

const NoteContext = createContext(null);

export const useNotes = () => useContext(NoteContext);

export const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    const updateNote = (id, updatedContent) => {
        setNotes(notes.map(note => note.id === id ? { ...note, content: updatedContent } : note));
    };

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
            {children}
        </NoteContext.Provider>
    );
};