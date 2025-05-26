import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import './App.css';

function App() {
 const [currentPage, setCurrentPage] = useState('welcome');
  const [userInfo, setUserInfo] = useState(null);
  const [loginInfo, setLoginInfo] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleSignup = (data) => {
    setUserInfo(data);
  };

  const handleLogin = (data) => {
    setLoginInfo(data);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <Welcome onNavigate={handleNavigate} />;
      case 'login':
        return <Login onNavigate={handleNavigate} onLogin={handleLogin} />;
      case 'signup':
        return <Signup onNavigate={handleNavigate} onSignup={handleSignup} />;
      case 'profile':
        return <Profile userInfo={userInfo} loginInfo={loginInfo} />;
      default:
        return <Welcome onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="font-sans">
      {renderCurrentPage()}
    </div>
  );
}

export default App
