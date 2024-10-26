import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Question from './Pages/Question';
import HomePage from './Pages/HomePage';
import BouncingDotLoader from './components/Main/BouncingDotLoader';
import { login } from './store/authSlice';

import CommunityPage from './Pages/CommunityPage';
import Mood from './Pages/Mood';
import PicDump from './Pages/PicDump';
import Settings from './Pages/Settings';
import Layout from './components/Main/Layout';
import GroupView from './Pages/GroupView';
import data from './data/groups.json'
import ProfileCard from './components/NavbarThings/profilecard';
import GroupsJoined from './components/NavbarThings/groupjoined';
import Notifications from './components/NavbarThings/Notifications';

const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const id = data.id;

  const handleLogin = () => {
    dispatch(login());
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
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/picdump" element={<PicDump />} />
          <Route path="/settings" element={<Settings />} />
          <Route path='/groupview' element = {<GroupView/>}/>
          <Route path='/profile' element={<ProfileCard/>}/>
          <Route path='/joinedgroups' element={<GroupsJoined/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
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
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? <BouncingDotLoader /> : <AppRoutes />}
    </div>
  );
};

export default App;