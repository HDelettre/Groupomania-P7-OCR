import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Import components
import LoginContainer from './Components/Login/Login.Container';
import HomeContainer from './Components/Home/Home.Container';
import MyProfile from './Components/Profile/MyProfile';
import LogoutSheet from './Components/Logout/LogoutSheet';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <LoginContainer /> } />

        <Route path='/Home' element= { <HomeContainer /> } />

        <Route path='/Profile' element= { <MyProfile /> } />

        <Route path='/Logout' element= { <LogoutSheet /> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
