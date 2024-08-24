import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Question from './Pages/Question';
import HomePage from './Pages/HomePage';
import BouncingDotLoader from './components/BouncingDotLoader';
import { login } from './store/authSlice'; 
import CommunityPage from './Pages/CommunityPage';
import Mood from './Pages/Mood';
import PicDump from './Pages/PicDump';
import Settings from './Pages/Settings';
import Layout from './components/Layout';

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
       
             
          <Route path="/home" element={<Layout><HomePage/></Layout>} />
          <Route path="/community" element={<Layout><CommunityPage /></Layout>} />
          <Route path="/mood" element={<Layout><Mood/></Layout>} />
          <Route path="/picdump" element={<Layout><PicDump /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
         
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
