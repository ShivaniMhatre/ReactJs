import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

import Welcome from './Components/Welcome';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Footer from './Components/Footer';


function App() {
  return (
    
    <div>
      <Routes>
        <Route path="/welcome" element={<Welcome/>}> 
        </Route>
      </Routes>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}> 
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login/>}> 
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
