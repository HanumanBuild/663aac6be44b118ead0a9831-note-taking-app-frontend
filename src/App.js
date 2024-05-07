import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import { AuthProvider } from './context/AuthContext';
import { NoteProvider } from './context/NoteContext';

function App() {
    return (
        <Router>
            <AuthProvider>
                <NoteProvider>
                    <Routes>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/notes" element={<NoteList />} />
                        <Route path="/edit" element={<NoteEditor />} />
                    </Routes>
                </NoteProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;