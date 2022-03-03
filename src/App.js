import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form';
import Menu from './components/menu/Menu';
import Popup from './components/popup/Popup';
import Sponzori from './components/sponzori/Sponzori';
import Left from './components/left-side/Left';
import Footer from './components/footer/Footer';
import AboutPx from './components/about-pixel/AboutPx';
import KartaMinimal from './components/karta-minimal/KartaMinimal';
import Dizajneri from './components/dizajneri/Dizajneri';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/_sites/home/Home';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Profile from './components/_sites/profile/Profile';
import RightNav from './components/menu/RightNav';
import Burger from './components/menu/Burger';

function App() {


  return (
  <Router>
      
      <div className='menu'><Burger/></div>
      
    <Routes>
      <Route path='/' element={<Home /> }/>
      <Route path='/dizajneri' element={<Dizajneri />}/>
      <Route path='/profil' element={<Profile />}/>
    </Routes>
      
      
    <div className='footer'><Footer /></div>
    </Router>
    


  );
}

export default App;
