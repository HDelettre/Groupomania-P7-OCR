import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import components
import LoginSheet from "./Components/Login/LoginSheet";
import Home from './Components/Home/Home';
import MyProfile from './Components/Profile/MyProfile';
import LogoutSheet from './Components/Logout/LogoutSheet';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <LoginSheet /> } />

        <Route path='/Home' element= { <Home /> } />

        <Route path='/Profile' element= { <MyProfile /> } />

        <Route path='/Logout' element= { <LogoutSheet /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
