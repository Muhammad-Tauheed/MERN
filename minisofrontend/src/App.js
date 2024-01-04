import 'bootstrap/dist/css/bootstrap.css';
import Firstnav from './components/Firstnav';
import Secondnav from './components/Secondnav';
import Mainnav from './components/Mainnav';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Newarrival from './components/Newarrival';
import Lotso from './components/Lotso';
import Bear from './components/Bear';
import Category from './components/Category';
import Loyalty from './components/Loyalty';
import Contactus from './components/Contactus';








function App() {
  return (
    <>
    <Firstnav/>
    <Secondnav/>
    <Mainnav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/newarrivals" element={<Newarrival/>}></Route>
      <Route path="/lotso" element={<Lotso/>}></Route>
      <Route path="/bear" element={<Bear/>}></Route>
      <Route path="/cat" element={<Category/>}></Route>
      <Route path="/loyalty" element={<Loyalty/>}></Route>
      <Route path="/contact" element={<Contactus/>}></Route>
    </Routes>
   
   </>
  );
}

export default App;
