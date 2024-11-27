import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResourceDetailPage from './pages/ResourceDetailPage';
import { AuthProvider } from '@/context/AuthContext';
import UserDashboard from './components/layout/UserDashboard';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resource/:id" element={<ResourceDetailPage />} />
          <Route path="/profile" element={<UserDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;