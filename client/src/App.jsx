import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SignUp from './Pages/Logins/SignUp';
import SignIn from './Pages/Logins/SignIn';
import Question from './Pages/Logins/Question';
import HomePage from './Pages/AppContent/HomePage';
import BouncingDotLoader from './components/Main/BouncingDotLoader';
import { login } from './store/authSlice'; 
import CommunityPage from './Pages/AppContent/CommunityPage';
import Mood from './Pages/AppContent/Mood';
import PicDump from './Pages/AppContent/PicDump';
import Settings from './Pages/Profile/Settings';
import Layout from './components/Main/Layout';
// import SparkleEffect from './CustomCss/Sparkle';  // Import the Sparkle Effect

const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Use the isAuthenticated state from Redux
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login()); // Dispatch login action to update the auth state
  };

  return (
    <Router>
      <Routes>
        {/* Routes without Layout */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route 
          path="/signup" 
          element={isAuthenticated ? <Navigate to="/question" /> : <SignUp onSignUp={handleLogin} />} 
        />
        <Route 
          path="/signin" 
          element={isAuthenticated ? <Navigate to="/question" /> : <SignIn onSignIn={handleLogin} />} 
        />
        <Route 
          path="/question" 
          element={isAuthenticated ? <Question /> : <Navigate to="/signup" />} 
        />
        
        {/* Routes with Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/picdump" element={<PicDump />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading for 3 seconds
  }, []);

  return (
    <div>
      {loading ? <BouncingDotLoader /> : <AppRoutes />}
    </div>
  );
};

export default App;
