import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Welcome from './Components/Welcome';
import Navbar from './Components/Navbar';
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
import DynamicStyle from './Components/04-07/DynamicStyle';
import DynamicClasses from './Components/04-07/DynamicClasses';
import ChildrenProps from './Components/04-07/ChildrenProps';
import Formone from './Components/06-07/Formone';
import Multiple from './Components/practice/Multiple';
import FormSingleState from './Components/08-07/FormSingleState';
import Callback from './Components/08-07/Callback';
import UseMemo from './Components/09-07/UseMemo';
import UseReducer from './Components/09-07/UseReducer';
import ProductFromBackend from './Components/11-07/ProductFromBackend';
import Product from './Components/13-07/Product';
import Practice_Single from './Components/practice/Practice_Single';
import Practice_Multiple from './Components/practice/Practice_Multiple';
import Login from './Components/15-07/Login';
import Register from './Components/15-07/Register';
import Cart from './Components/18-07/Cart';
import Profile from './Components/19-07/Profile';






function App() {
  const [myUsers, setMyUsers] = useState(["Rahul", "Krishan", "Manoj"])
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/counter" element={<Count />} />
        <Route exact path="/section" element={<Section />} />
        <Route exact path="/type1" element={<NoDependency />} />
        <Route exact path="/type2" element={<EmptyDependency />} />
        <Route exact path="/type3" element={<Type3dependency />} />
        <Route exact path="/type4" element={<MultipleDependency />} />
        {/* Practice */}/
        <Route exact path="/practice" element={<Multiple />} />
        <Route exact path="/pm" element={<Practice_Multiple/>} />
        <Route exact path="/ps/:id" element={<Practice_Single />} />
        
        {/* 01-07 */}
        <Route exact path="/params" element={<Params />} />
        <Route exact path="/single-product/:shivani" element={<Singleproduct />} />
        <Route exact path="/declerative" element={<DeclerativeWay />} />
        <Route exact path='/map' element={<Map myUsers={myUsers} setMyUsers={setMyUsers} myName={"Shivani"} kuchBhi={["rudra", "mugdha", "yash", "avdhootnpm"]} />} />
        <Route exact path="/styledcomp" element={<StyledComp />} />
        <Route exact path="/wrapper" element={<Wrapper />} />
        {/* 02-07 */}
        <Route exact path="/xyz" element={<Xyz />} />
        <Route exact path="/singlepro/:id" element={<Singlepro />} />
        {/* 04-07 */}
        <Route exact path="/dynamicstyle" element={<DynamicStyle />} />
        <Route exact path="/dynamicclasses" element={<DynamicClasses />} />
        <Route exact path='/children-props' element={<ChildrenProps />} />
        {/* 06-07 */}
        <Route exact path="/form-one" element={<Formone />} />
        {/* 08-07 */}
        <Route exact path="/form-single-state" element={<FormSingleState />} />
        <Route exact path="/use-callback" element={<Callback />} />
        {/* 09-07 */}
        <Route exact path="/usememo" element={<UseMemo />} />
        <Route exact path="/usereducer" element={<UseReducer />} />
        {/* 11-07 */}
        <Route exact path="/product-from-backend" element={<ProductFromBackend />} />
        {/* 13-07 */}
        <Route exact path='/product/:id' element={<Product />} />
        {/* 15-07 */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        {/* 18-07 */}
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
