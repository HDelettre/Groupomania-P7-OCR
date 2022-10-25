import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Import components
import LoginSheet from "./Components/Login/LoginSheet";
import Home from './Components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <LoginSheet /> } />

        <Route path='/Home' element= { <Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
