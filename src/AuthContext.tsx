import React, { createContext, useState, useEffect } from 'react';

interface User {
    name: string;
    token: string;
    permissions: string[];
}

interface AuthContextProps {
    user: User | null;
    hasPermission: (permission: string) => boolean;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    hasPermission: () => false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Simula il recupero dei dati utente, ad esempio dall'API
        const fetchUser = async () => {
            const response = await fetch('/api/user');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const userData = await response.json();
            setUser(userData);
        };

        fetchUser().catch(error => console.error('Errore nel recupero dei dati utente:', error));
    }, []);

    const hasPermission = (permission: string) => {
        return user?.permissions.includes(permission) ?? false;
    };

    return (
        <AuthContext.Provider value={{ user, hasPermission }}>
            {children}
        </AuthContext.Provider>
    );
};
