import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Import components
import LoginSheet from "./Components/Login/LoginSheet";
import Home from './Components/Home/Home';
import MyProfile from './Components/Profile/MyProfile';
import LogoutSheet from './Components/Logout/LogoutSheet';


function App() {

  const [connectId, setConnectId] = useState('')

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <LoginSheet setConnectId={setConnectId} /> } />

        <Route path='/Home' element= { <Home connectId={connectId} /> } />

        <Route path='/Profile' element= { <MyProfile /> } />

        <Route path='/Logout' element= { <LogoutSheet /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
