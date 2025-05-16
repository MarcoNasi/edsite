import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState } from '../types';

interface AuthContextType {
  authState: AuthState;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    // Check if user is already logged in
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      try {
        const parsedAuth = JSON.parse(storedAuth);
        setAuthState(parsedAuth);
      } catch (error) {
        console.error('Failed to parse auth from localStorage:', error);
        localStorage.removeItem('auth');
      }
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // In a real application, you would validate credentials against your backend
    // For demo purposes, we'll use a hardcoded admin user
    if (username === 'admin' && password === 'password') {
      const newAuthState = {
        isAuthenticated: true,
        user: username,
      };
      setAuthState(newAuthState);
      localStorage.setItem('auth', JSON.stringify(newAuthState));
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};