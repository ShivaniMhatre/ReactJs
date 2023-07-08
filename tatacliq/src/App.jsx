import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './TatacliqPages/Navbar';
import Home from './TatacliqPages/Home';
import Footer from './TatacliqPages/Footer';
import Men from './TatacliqPages/Men';
import Pactice from './TatacliqPages/Pactice';
import Cate_dropdown from './TatacliqPages/Cate_dropdown';
import Multiple_pro from './TatacliqPages/Multiple_pro';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/men" element={<Men/>}/>
        <Route exact path="/cate_dropdown" element={<Cate_dropdown/>}/>
        <Route exact path="/practice" element={<Pactice/>}/>
        <Route exact path="/multiple-pro" element={<Multiple_pro/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
