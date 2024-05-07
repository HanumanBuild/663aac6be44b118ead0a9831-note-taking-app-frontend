import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = (userData) => {
        setUser(userData);
        // Implement logic to persist login state
    };

    const signOut = () => {
        setUser(null);
        // Implement logic to clear login state
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};