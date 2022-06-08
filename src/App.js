import logo from './logo.svg';
import './App.css';

import About from './pages/about';
import Home from './pages/home';
import Notfound from './pages/notfound';
import Contact from './pages/contact';
import WhyChoseUs from './pages/whychoseus';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   
   
    <div className="App">
      
       <BrowserRouter>
       
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/why-chose-us" element={<WhyChoseUs/>}/>
      <Route  exact path="*" element={ <Notfound/> }/>
      
     
    </Routes>
  </BrowserRouter>
  

    </div>
  );
}

export default App;
