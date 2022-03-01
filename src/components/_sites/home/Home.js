import React from 'react';
import "../../../App.css"
import Left from '../../left-side/Left';
import Form from '../../form/Form';
import Sponzori from '../../sponzori/Sponzori';
import AboutPx from '../../about-pixel/AboutPx';

const Home = () => {


    return (
        <div className='home'>
            <div className="logo-top"></div>
            <div className='flex-container'>
      
      <div className='left'><Left /></div>
      <div className="form"><Form/></div>

      <div className='sponzori'><Sponzori /></div>
      </div>
      <div className='second-container'>
      <div className='about'><AboutPx /></div>


    
      </div>
        </div>
    );
};

export default Home;