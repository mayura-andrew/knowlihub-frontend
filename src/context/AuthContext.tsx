import React, { createContext, useState } from 'react';

interface User {
  name: string;
  email?: string;
  avatar?: string;
 rank?: number;
    level?: number;
  // Add other user properties as needed
}

interface AuthContextProps {
  isSignedIn: boolean;
  user: User | null;
  login: (values: { name?: string; email: string; password: string; avatar?: string | null }) => Promise<void>;
  signUp: (values: { username: string; email: string; password: string; confirmPassword: string }) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isSignedIn: false,
  user: null,
  login: async () => {},
  signUp: async () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (values: { email: string; password: string }) => {
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1500));
    setUser({ name: 'John Doe', email: values.email });
    setIsSignedIn(true);
  };

  const signUp = async (values: { username: string; email: string; password: string; confirmPassword: string }) => {
    // Simulate sign-up
    await new Promise(resolve => setTimeout(resolve, 1500));
    setUser({ name: values.username, email: values.email });
    setIsSignedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};