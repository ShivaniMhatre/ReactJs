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
import DeclerativeWay from './Components/01-07/DeclerativeWay';
import Map from './Components/01-07/Map';
import StyledComp from './Components/01-07/StyledComp';
import Wrapper from './Components/01-07/Wrapper';

import Params from './Components/01-07/Params';
import { useState } from 'react';
import Singleproduct from './Components/01-07/Singleproduct';
import Xyz from './Components/02-07/Xyz';
import Singlepro from './Components/02-07/Singlepro';




function App() {
  const [myUsers, setMyUsers] = useState(["Rahul", "Krishan", "Manoj"])
  return (

    <div>
      <Navbar />
      <Routes>
      <Route path="/welcome" element={<Welcome />} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/counter" element={<Count/>}/>
        <Route exact path="/section" element={<Section/>}/>
        <Route exact path="/type1" element={<NoDependency/>}/>
        <Route exact path="/type2" element={<EmptyDependency/>}/>
        <Route exact path="/type3" element={<Type3dependency/>}/>
        <Route exact path="/type4" element={<MultipleDependency/>}/>
        {/* 01-07 */}
        <Route exact path="/params" element={<Params/>}/>
        <Route exact path="/single-product/:shivani" element={<Singleproduct/>}/>
        <Route exact path="/declerative" element={<DeclerativeWay/>}/>
        <Route exact path='/map' element={<Map myUsers={myUsers} setMyUsers={setMyUsers} myName={"Shivani"} kuchBhi={["rudra","mugdha","yash","avdhootnpm"]} />} />
        <Route exact path="/styledcomp" element={<StyledComp/>}/>
        <Route exact path="/wrapper" element={<Wrapper/>}/>
        {/* 02-07 */}
        <Route exact path="/xyz" element={<Xyz/>}/>
        <Route exact path="/singlepro/:id" element={<Singlepro/>}/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
