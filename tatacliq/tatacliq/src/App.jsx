import logo from './logo.svg';
import './App.css';
import Navbar from './TataCliqPages/Navbar';
import Home from './TataCliqPages/Home';
import Cate_dropdown from './TataCliqPages/Cate_dropdown';
import Men from './TataCliqPages/Men';
import { Route, Routes } from 'react-router-dom';
import Footer from './TataCliqPages/Footer';
import Multiple_pro from './TataCliqPages/Multiple_pro';
import MenSingle_Product from './TataCliqPages/MenSingle_Product';
import Profile from './TataCliqPages/Profile';
import Cart from './TataCliqPages/cart/Cart';
import Cart_Navbar from './TataCliqPages/cart/Cart_Navbar';
// import Sign_dropdown from './TataCliqPages/Sign_dropdown';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/men" element={<Men/>}/>
        <Route exact path="/cate_dropdown" element={<Cate_dropdown/>}/>
        <Route exact path="/multiple-pro" element={<Multiple_pro/>}/>
        <Route exact path="/men_SingleProduct" element={<MenSingle_Product/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        {/* <Route exact path="/cart" element={<Cart/>}/> */}
        <Route exact path="/cartNav" element={<Cart_Navbar/>}/>
        {/* <Route exact path="/sign" element={<Sign_dropdown/>}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
