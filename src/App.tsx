import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import UserDashboard from './components/layout/UserDashboard';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<UserDashboard />} />
    </Routes>
  </Router>
  );
}

export default App;
