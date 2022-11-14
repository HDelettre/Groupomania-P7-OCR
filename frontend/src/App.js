import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import components
import LoginContainer from './Components/Login/Login.Container';
import HomeContainer from './Components/Home/Home.Container';
import MyProfile from './Components/Profile/MyProfile';
import LogoutSheet from './Components/Logout/LogoutSheet';
import Dashboard from './Components/Admin/Dashboard';
import OtherProfile from './Components/Profile/OtherProfile';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element= { <LoginContainer /> } />

        <Route path='/Home' element= { <HomeContainer /> } />

        <Route path='/Profile' element= { <MyProfile /> } />

        <Route path='/Logout' element= { <LogoutSheet /> } />

        <Route path='/Admin' element= { <Dashboard /> } />

        <Route path='/OtherProfile' element={ <OtherProfile /> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
