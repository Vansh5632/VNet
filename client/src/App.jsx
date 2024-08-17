import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store/store';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Question from './Pages/Question';
import { signUp } from './store/authSlice';
import HomePage from './Pages/HomePage';
import BouncingDotLoader from './components/BouncingDotLoader';

const AppRoutes = () => {
  const isSignedUp = useSelector((state) => state.auth.isSignedUp);
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(signUp());
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={isSignedUp ? <Navigate to="/question" /> : <SignUp onSignUp={handleSignUp} />} />
        <Route path="/signin" element={isSignedUp ? <Navigate to="/question" /> : <SignIn />} />
        <Route path="/question" element={isSignedUp ? <Question /> : <Navigate to="/signup" />} />
        <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
    </Router>
  );
};

const App = () => {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000);
  },[])
  return (
    <Provider store={store}>
      {loading?<BouncingDotLoader/>:<AppRoutes/>}
    </Provider>
  );
};

export default App;
