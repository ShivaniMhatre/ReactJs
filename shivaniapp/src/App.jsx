import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

import Welcome from './Components/Welcome';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Count from './Components/Count';
import Section from './Components/Section';
import NoDependency from './Components/NoDependency';
import EmptyDependency from './Components/EmptyDependency';

import MultipleDependency from './Components/MultipleDependency';
import Type3dependency from './Components/Type3dependency';


function App() {
  return (

    <div>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />

      </Routes>

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/counter" element={<Count/>}/>
        <Route exact path="/section" element={<Section/>}/>
        <Route exact path="/type1" element={<NoDependency/>}/>
        <Route exact path="/type2" element={<EmptyDependency/>}/>
        <Route exact path="/type3" element={<Type3dependency/>}/>
        <Route exact path="/type4" element={<MultipleDependency/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
